/**
 * **llama.cpp** - Package from pantry: github.com/ggerganov/llama.cpp
 *
 * @domain `github.com/ggerganov/llama.cpp`
 *
 * @install `launchpad install github.com/ggerganov/llama.cpp`
 * @dependencies `pkgx.sh^1`, `curl.se^8 # libcurl, since b5064`, `linux:gnu.org/gcc/libstdcxx` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomggerganovllamacpp
 * console.log(pkg.name)        // "llama.cpp"
 * console.log(pkg.description) // "Package from pantry: github.com/ggerganov/llama..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ggerganov/llama-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomggerganovllamacppPackage = {
  /**
   * The display name of this package.
   */
  name: 'llama.cpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ggerganov/llama.cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ggerganov/llama.cpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ggerganov/llama.cpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ggerganov/llama.cpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ggerganov/llama.cpp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'pkgx.sh^1',
    'curl.se^8 # libcurl, since b5064',
    'linux:gnu.org/gcc/libstdcxx',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ggerganov/llama.cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomggerganovllamacppPackage = typeof githubcomggerganovllamacppPackage
