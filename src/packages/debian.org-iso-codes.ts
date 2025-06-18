/**
 * **iso-codes** - pkgx package
 *
 * @domain `debian.org/iso-codes`
 * @version `4.18.0` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/debian-org/iso-codes.md
 *
 * @install `sh <(curl https://pkgx.sh) +debian.org/iso-codes -- $SHELL -i`
 * @aliases `iso-codes`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.isocodes
 * // Or access via domain
 * const samePkg = pantry.debianorgisocodes
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "debian.org/iso-codes"
 * console.log(pkg.versions[0]) // "4.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/debian-org/iso-codes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const isocodesPackage = {
  /**
   * The display name of this package.
   */
  name: 'debian.org/iso-codes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'debian.org/iso-codes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from debian.org/iso-codes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/iso-codes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +debian.org/iso-codes -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.18.0',
    '4.17.0',
    '4.16.0',
    '4.15.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'iso-codes',
  ] as const,
  fullPath: 'debian.org/iso-codes' as const,
}

export type IsocodesPackage = typeof isocodesPackage
