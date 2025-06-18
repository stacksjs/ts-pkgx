/**
 * **debian.org/iso-codes** - pkgx package
 *
 * @domain `debian.org/iso/codes`
 *
 * @install `pkgx debian.org/iso-codes`
 * @name `iso-codes`
 * @aliases `debian.org/iso-codes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.debianorgisocodes
 * // Or access via domain
 * const samePkg = pantry.debianorgisocodes
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "iso-codes"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/debian-org/iso/codes.md
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
  domain: 'debian.org/iso/codes' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx debian.org/iso-codes' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'debian.org/iso-codes',
  ] as const,
  fullPath: 'debian.org/iso-codes' as const,
}

export type DebianorgisocodesPackage = typeof debianorgisocodesPackage
