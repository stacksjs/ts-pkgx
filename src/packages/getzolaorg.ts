/**
 * **getzola.org** - Package from pantry: getzola.org
 *
 * @domain `getzola.org`
 *
 * @install `launchpad install getzola.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getzolaorg
 * console.log(pkg.name)        // "getzola.org"
 * console.log(pkg.description) // "Package from pantry: getzola.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getzola-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getzolaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'getzola.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getzola.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: getzola.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install getzola.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +getzola.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install getzola.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getzola.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GetzolaorgPackage = typeof getzolaorgPackage
