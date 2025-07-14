/**
 * **confd** - Package from pantry: github.com/abtreece/confd
 *
 * @domain `github.com/abtreece/confd`
 *
 * @install `launchpad install github.com/abtreece/confd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomabtreececonfd
 * console.log(pkg.name)        // "confd"
 * console.log(pkg.description) // "Package from pantry: github.com/abtreece/confd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/abtreece/confd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomabtreececonfdPackage = {
  /**
   * The display name of this package.
   */
  name: 'confd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/abtreece/confd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/abtreece/confd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/abtreece/confd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/abtreece/confd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/abtreece/confd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/abtreece/confd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomabtreececonfdPackage = typeof githubcomabtreececonfdPackage
