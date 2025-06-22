/**
 * **neofetch** - Package from pantry: github.com/dylanaraps/neofetch
 *
 * @domain `github.com/dylanaraps/neofetch`
 *
 * @install `launchpad install github.com/dylanaraps/neofetch`
 * @dependencies `darwin:github.com/jhford/screenresolution` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdylanarapsneofetch
 * console.log(pkg.name)        // "neofetch"
 * console.log(pkg.description) // "Package from pantry: github.com/dylanaraps/neof..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dylanaraps/neofetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdylanarapsneofetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'neofetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dylanaraps/neofetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/dylanaraps/neofetch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/dylanaraps/neofetch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/dylanaraps/neofetch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/dylanaraps/neofetch' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:github.com/jhford/screenresolution',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dylanaraps/neofetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdylanarapsneofetchPackage = typeof githubcomdylanarapsneofetchPackage
