#!/bin/bash
# Pantry Install Script
#
# One-liner install:
#   curl -fsSL https://your-domain.com/install.sh | bash
#
# Or with custom bucket:
#   curl -fsSL https://your-domain.com/install.sh | PANTRY_BUCKET=my-bucket bash

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}📦 Installing Pantry...${NC}"

# Config
PANTRY_HOME="${PANTRY_HOME:-$HOME/.pantry}"
PANTRY_BUCKET="${PANTRY_BUCKET:-pantry-registry}"
PANTRY_REGION="${PANTRY_REGION:-us-east-1}"
PANTRY_REPO="${PANTRY_REPO:-https://github.com/YOUR_ORG/ts-pantry.git}"

# Detect shell
SHELL_NAME=$(basename "$SHELL")
if [[ "$SHELL_NAME" == "zsh" ]]; then
  SHELL_RC="$HOME/.zshrc"
elif [[ "$SHELL_NAME" == "bash" ]]; then
  SHELL_RC="$HOME/.bashrc"
else
  SHELL_RC="$HOME/.profile"
fi

# Check prerequisites
echo -e "${BLUE}Checking prerequisites...${NC}"

if ! command -v bun &> /dev/null; then
  echo -e "${YELLOW}Bun not found. Installing bun...${NC}"
  curl -fsSL https://bun.sh/install | bash
  export PATH="$HOME/.bun/bin:$PATH"
fi

if ! command -v aws &> /dev/null; then
  echo -e "${YELLOW}⚠️  AWS CLI not found. You'll need it for S3 downloads.${NC}"
  echo "   Install: https://aws.amazon.com/cli/"
fi

# Create pantry home
echo -e "${BLUE}Creating $PANTRY_HOME...${NC}"
mkdir -p "$PANTRY_HOME/bin"
mkdir -p "$PANTRY_HOME/scripts"

# Download scripts (or clone repo)
echo -e "${BLUE}Downloading pantry scripts...${NC}"

# Option 1: Clone the repo
# git clone --depth 1 "$PANTRY_REPO" "$PANTRY_HOME/repo"
# cp "$PANTRY_HOME/repo/scripts/"*.ts "$PANTRY_HOME/scripts/"
# cp "$PANTRY_HOME/repo/scripts/"*.sh "$PANTRY_HOME/scripts/"

# Option 2: Download individual scripts from S3 or a CDN
# For now, we'll create a minimal inline version

cat > "$PANTRY_HOME/scripts/shellenv.sh" << 'SHELLENV'
#!/bin/bash
# Pantry Shell Integration

PANTRY_HOME="${PANTRY_HOME:-$HOME/.pantry}"
PANTRY_BUCKET="${PANTRY_BUCKET:-pantry-registry}"
PANTRY_REGION="${PANTRY_REGION:-us-east-1}"

_pantry_last_dir=""

_pantry_hook() {
  local config_file=""

  [[ "$PWD" == "$_pantry_last_dir" ]] && return
  _pantry_last_dir="$PWD"

  if [[ -f "pantry.yaml" ]]; then
    config_file="pantry.yaml"
  elif [[ -f "deps.yaml" ]]; then
    config_file="deps.yaml"
  elif [[ -f ".pantry.yaml" ]]; then
    config_file=".pantry.yaml"
  fi

  if [[ -z "$config_file" ]]; then
    [[ -n "$PANTRY_ACTIVE" ]] && _pantry_deactivate
    return
  fi

  _pantry_activate "$config_file"
}

_pantry_activate() {
  local config_file="$1"
  echo -e "\033[0;34m📦 pantry\033[0m Activating from ${config_file}"

  # Sync packages if download script exists
  if [[ -f "$PANTRY_HOME/scripts/download-from-s3.ts" ]] && command -v bun &> /dev/null; then
    bun "$PANTRY_HOME/scripts/download-from-s3.ts" \
      -c "$config_file" \
      -b "$PANTRY_BUCKET" \
      -r "$PANTRY_REGION" \
      --install-dir "$PANTRY_HOME" \
      2>/dev/null
  fi

  _pantry_update_path "$config_file"
  export PANTRY_ACTIVE="$PWD"
  export PANTRY_CONFIG="$config_file"
}

_pantry_deactivate() {
  [[ -n "$PANTRY_OLD_PATH" ]] && export PATH="$PANTRY_OLD_PATH" && unset PANTRY_OLD_PATH
  unset PANTRY_ACTIVE PANTRY_CONFIG
}

_pantry_update_path() {
  local config_file="$1"
  local new_paths=""

  [[ -z "$PANTRY_OLD_PATH" ]] && export PANTRY_OLD_PATH="$PATH"

  while IFS=': ' read -r key value; do
    [[ -z "$key" || "$key" =~ ^# || "$key" == "dependencies" ]] && continue
    local pkg=$(echo "$key" | sed 's/^[[:space:]]*//')
    [[ -z "$pkg" || "$pkg" == "dependencies" ]] && continue

    local pkg_dir="$PANTRY_HOME/$pkg"
    if [[ -d "$pkg_dir" ]]; then
      local version_dir=$(ls -1 "$pkg_dir" 2>/dev/null | grep -v current | sort -V | tail -1)
      if [[ -n "$version_dir" ]]; then
        [[ -d "$pkg_dir/$version_dir/bin" ]] && new_paths="$pkg_dir/$version_dir/bin:$new_paths"
        [[ -d "$pkg_dir/$version_dir/sbin" ]] && new_paths="$pkg_dir/$version_dir/sbin:$new_paths"
      fi
    fi
  done < "$config_file"

  [[ -n "$new_paths" ]] && export PATH="${new_paths}$PANTRY_OLD_PATH"
}

# Install hooks
if [[ -n "$ZSH_VERSION" ]]; then
  autoload -Uz add-zsh-hook
  add-zsh-hook chpwd _pantry_hook
  _pantry_hook
elif [[ -n "$BASH_VERSION" ]]; then
  _pantry_old_prompt_command="$PROMPT_COMMAND"
  PROMPT_COMMAND="_pantry_hook; $_pantry_old_prompt_command"
  _pantry_hook
fi

# Commands
pantry() {
  case "$1" in
    status)
      if [[ -n "$PANTRY_ACTIVE" ]]; then
        echo "Active in: $PANTRY_ACTIVE"
        echo "Config: $PANTRY_CONFIG"
      else
        echo "Not active"
      fi
      ;;
    list)
      echo "Installed packages:"
      ls -1 "$PANTRY_HOME" 2>/dev/null | grep -v -E '^(scripts|bin|env\.sh)$' | while read pkg; do
        versions=$(ls -1 "$PANTRY_HOME/$pkg" 2>/dev/null | tr '\n' ', ' | sed 's/,$//')
        echo "  $pkg: $versions"
      done
      ;;
    deactivate) _pantry_deactivate && echo "Deactivated" ;;
    *) echo "Usage: pantry {status|list|deactivate}" ;;
  esac
}
SHELLENV

chmod +x "$PANTRY_HOME/scripts/shellenv.sh"

# Add to shell RC if not already present
echo -e "${BLUE}Configuring shell...${NC}"

if ! grep -q "PANTRY_HOME" "$SHELL_RC" 2>/dev/null; then
  cat >> "$SHELL_RC" << EOF

# Pantry - package manager
export PANTRY_HOME="$PANTRY_HOME"
export PANTRY_BUCKET="$PANTRY_BUCKET"
export PANTRY_REGION="$PANTRY_REGION"
source "\$PANTRY_HOME/scripts/shellenv.sh"
EOF
  echo -e "${GREEN}✓${NC} Added to $SHELL_RC"
else
  echo -e "${YELLOW}⚠️${NC} Pantry already configured in $SHELL_RC"
fi

# Done
echo ""
echo -e "${GREEN}✅ Pantry installed!${NC}"
echo ""
echo "To get started:"
echo "  1. Restart your terminal or run: source $SHELL_RC"
echo "  2. cd into a project with deps.yaml"
echo "  3. Packages will auto-download and activate"
echo ""
echo "Example deps.yaml:"
echo "  dependencies:"
echo "    bun.sh: ^1"
echo "    php.net: ^8.4"
echo "    nodejs.org: ^22"
echo ""
echo "Commands:"
echo "  pantry status  - Show active packages"
echo "  pantry list    - List installed packages"
echo ""
