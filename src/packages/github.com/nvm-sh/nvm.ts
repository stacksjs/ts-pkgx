/**
 * **nvm** - Package from pantry: github.com/nvm-sh/nvm
 *
 * @domain `github.com/nvm-sh/nvm`
 *
 * @install `launchpad install github.com/nvm-sh/nvm`
 * @dependencies `linux:curl.se` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnvmshnvm
 * console.log(pkg.name)        // "nvm"
 * console.log(pkg.description) // "Package from pantry: github.com/nvm-sh/nvm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nvm-sh/nvm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnvmshnvmPackage = {
  /**
   * The display name of this package.
   */
  name: 'nvm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nvm-sh/nvm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nvm-sh/nvm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nvm-sh/nvm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nvm-sh/nvm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nvm-sh/nvm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nvm-sh/nvm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnvmshnvmPackage = typeof githubcomnvmshnvmPackage
