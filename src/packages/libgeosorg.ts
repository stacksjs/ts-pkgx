/**
 * **libgeos.org** - Package from pantry: libgeos.org
 *
 * @domain `libgeos.org`
 *
 * @install `launchpad install libgeos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libgeosorg
 * console.log(pkg.name)        // "libgeos.org"
 * console.log(pkg.description) // "Package from pantry: libgeos.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgeos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libgeosorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgeos.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgeos.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libgeos.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libgeos.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libgeos.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libgeos.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgeos.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibgeosorgPackage = typeof libgeosorgPackage
