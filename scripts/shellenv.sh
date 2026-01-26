#!/bin/bash
# Pantry Shell Integration
# Add to your ~/.zshrc or ~/.bashrc:
#   source /path/to/ts-pantry/scripts/shellenv.sh
#
# Or for a global install:
#   eval "$(pantry shellenv)"

PANTRY_HOME="${PANTRY_HOME:-$HOME/.pantry}"
PANTRY_SCRIPT_DIR="${PANTRY_SCRIPT_DIR:-$(dirname "${BASH_SOURCE[0]:-$0}")}"
PANTRY_BUCKET="${PANTRY_BUCKET:-pantry-registry}"
PANTRY_REGION="${PANTRY_REGION:-us-east-1}"

# Track the last directory we processed to avoid re-running
_pantry_last_dir=""

# Colors
_pantry_green='\033[0;32m'
_pantry_yellow='\033[0;33m'
_pantry_blue='\033[0;34m'
_pantry_reset='\033[0m'

_pantry_hook() {
  local config_file=""

  # Don't re-run if we're in the same directory
  if [[ "$PWD" == "$_pantry_last_dir" ]]; then
    return
  fi
  _pantry_last_dir="$PWD"

  # Check for config files
  if [[ -f "pantry.yaml" ]]; then
    config_file="pantry.yaml"
  elif [[ -f "deps.yaml" ]]; then
    config_file="deps.yaml"
  elif [[ -f ".pantry.yaml" ]]; then
    config_file=".pantry.yaml"
  fi

  # No config file, deactivate if needed
  if [[ -z "$config_file" ]]; then
    if [[ -n "$PANTRY_ACTIVE" ]]; then
      _pantry_deactivate
    fi
    return
  fi

  # Config file found - activate
  _pantry_activate "$config_file"
}

_pantry_activate() {
  local config_file="$1"

  echo -e "${_pantry_blue}📦 pantry${_pantry_reset} Found ${config_file}"

  # Run download script (it skips already-installed packages)
  if command -v bun &> /dev/null; then
    bun "$PANTRY_SCRIPT_DIR/download-from-s3.ts" \
      -c "$config_file" \
      -b "$PANTRY_BUCKET" \
      -r "$PANTRY_REGION" \
      --install-dir "$PANTRY_HOME" \
      2>/dev/null
  else
    echo -e "${_pantry_yellow}⚠️  bun not found, skipping package sync${_pantry_reset}"
  fi

  # Build PATH from installed packages
  _pantry_update_path "$config_file"

  export PANTRY_ACTIVE="$PWD"
  export PANTRY_CONFIG="$config_file"
}

_pantry_deactivate() {
  # Remove pantry paths from PATH
  if [[ -n "$PANTRY_OLD_PATH" ]]; then
    export PATH="$PANTRY_OLD_PATH"
    unset PANTRY_OLD_PATH
  fi

  unset PANTRY_ACTIVE
  unset PANTRY_CONFIG
}

_pantry_update_path() {
  local config_file="$1"
  local new_paths=""

  # Save original PATH if not already saved
  if [[ -z "$PANTRY_OLD_PATH" ]]; then
    export PANTRY_OLD_PATH="$PATH"
  fi

  # Parse dependencies from config file and add to PATH
  while IFS=': ' read -r key value; do
    # Skip empty lines, comments, and non-dependency lines
    [[ -z "$key" || "$key" =~ ^# || "$key" == "dependencies" ]] && continue

    # Clean up the package name (remove leading spaces)
    local pkg=$(echo "$key" | sed 's/^[[:space:]]*//')
    [[ -z "$pkg" || "$pkg" == "dependencies" ]] && continue

    # Find the installed version
    local pkg_dir="$PANTRY_HOME/$pkg"
    if [[ -d "$pkg_dir" ]]; then
      # Get the latest/current version
      local version_dir=$(ls -1 "$pkg_dir" | grep -v current | sort -V | tail -1)
      if [[ -n "$version_dir" ]]; then
        local bin_dir="$pkg_dir/$version_dir/bin"
        local sbin_dir="$pkg_dir/$version_dir/sbin"

        if [[ -d "$bin_dir" ]]; then
          new_paths="$bin_dir:$new_paths"
        fi
        if [[ -d "$sbin_dir" ]]; then
          new_paths="$sbin_dir:$new_paths"
        fi
      fi
    fi
  done < "$config_file"

  # Update PATH
  if [[ -n "$new_paths" ]]; then
    export PATH="${new_paths}$PANTRY_OLD_PATH"
    echo -e "${_pantry_green}✓${_pantry_reset} PATH updated with pantry packages"
  fi
}

# Install the hook based on shell type
if [[ -n "$ZSH_VERSION" ]]; then
  # Zsh: use chpwd hook
  autoload -Uz add-zsh-hook
  add-zsh-hook chpwd _pantry_hook

  # Run on initial load too
  _pantry_hook

elif [[ -n "$BASH_VERSION" ]]; then
  # Bash: use PROMPT_COMMAND
  _pantry_prompt_command() {
    _pantry_hook
    # Preserve any existing PROMPT_COMMAND
    if [[ -n "$_pantry_old_prompt_command" ]]; then
      eval "$_pantry_old_prompt_command"
    fi
  }

  _pantry_old_prompt_command="$PROMPT_COMMAND"
  PROMPT_COMMAND="_pantry_prompt_command"

  # Run on initial load too
  _pantry_hook
fi

# Manual commands
pantry() {
  case "$1" in
    install|sync)
      if [[ -f "pantry.yaml" || -f "deps.yaml" || -f ".pantry.yaml" ]]; then
        local config_file="pantry.yaml"
        [[ -f "deps.yaml" ]] && config_file="deps.yaml"
        [[ -f ".pantry.yaml" ]] && config_file=".pantry.yaml"

        bun "$PANTRY_SCRIPT_DIR/download-from-s3.ts" \
          -c "$config_file" \
          -b "$PANTRY_BUCKET" \
          -r "$PANTRY_REGION" \
          --install-dir "$PANTRY_HOME"

        _pantry_update_path "$config_file"
      else
        echo "No pantry.yaml or deps.yaml found in current directory"
        return 1
      fi
      ;;

    deactivate)
      _pantry_deactivate
      echo "Pantry deactivated"
      ;;

    status)
      if [[ -n "$PANTRY_ACTIVE" ]]; then
        echo "Pantry active in: $PANTRY_ACTIVE"
        echo "Config: $PANTRY_CONFIG"
        echo "Packages in PATH:"
        echo "$PATH" | tr ':' '\n' | grep "$PANTRY_HOME" | while read p; do
          echo "  - $p"
        done
      else
        echo "Pantry not active"
      fi
      ;;

    list)
      echo "Installed packages:"
      ls -1 "$PANTRY_HOME" 2>/dev/null | while read pkg; do
        [[ "$pkg" == "env.sh" ]] && continue
        local versions=$(ls -1 "$PANTRY_HOME/$pkg" 2>/dev/null | grep -v current | tr '\n' ', ' | sed 's/,$//')
        echo "  - $pkg: $versions"
      done
      ;;

    *)
      echo "Usage: pantry <command>"
      echo ""
      echo "Commands:"
      echo "  install    Download packages from deps.yaml"
      echo "  sync       Same as install"
      echo "  deactivate Remove pantry packages from PATH"
      echo "  status     Show current pantry status"
      echo "  list       List installed packages"
      ;;
  esac
}

echo -e "${_pantry_blue}📦 pantry${_pantry_reset} Shell integration loaded"
echo "   Run 'pantry status' or 'pantry list' for info"
