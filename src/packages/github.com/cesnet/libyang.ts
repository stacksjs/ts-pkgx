/**
 * **libyang** - Package from pantry: github.com/cesnet/libyang
 *
 * @domain `github.com/cesnet/libyang`
 *
 * @install `launchpad install github.com/cesnet/libyang`
 * @dependencies `pcre.org/v2>=10.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcesnetlibyang
 * console.log(pkg.name)        // "libyang"
 * console.log(pkg.description) // "Package from pantry: github.com/cesnet/libyang"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cesnet/libyang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcesnetlibyangPackage = {
  /**
   * The display name of this package.
   */
  name: 'libyang' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cesnet/libyang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cesnet/libyang' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cesnet/libyang' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cesnet/libyang -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cesnet/libyang' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org/v2>=10.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cesnet/libyang/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcesnetlibyangPackage = typeof githubcomcesnetlibyangPackage
