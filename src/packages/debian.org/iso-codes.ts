/**
 * **iso-codes** - Package from pantry: debian.org/iso-codes
 *
 * @domain `debian.org/iso-codes`
 *
 * @install `launchpad install debian.org/iso-codes`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.debianorgisocodes
 * console.log(pkg.name)        // "iso-codes"
 * console.log(pkg.description) // "Package from pantry: debian.org/iso-codes"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/debian-org/iso-codes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const debianorgisocodesPackage = {
  /**
   * The display name of this package.
   */
  name: 'iso-codes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'debian.org/iso-codes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: debian.org/iso-codes' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install debian.org/iso-codes' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +debian.org/iso-codes -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install debian.org/iso-codes' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/iso-codes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DebianorgisocodesPackage = typeof debianorgisocodesPackage
