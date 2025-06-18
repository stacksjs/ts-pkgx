/**
 * **libksba** - pkgx package
 *
 * @domain `gnupg.org/libksba`
 * @version `1.6.7` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnupg.org/libksba -- $SHELL -i`
 * @aliases `libksba`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libksba
 * // Or access via domain
 * const samePkg = pantry.gnupgorglibksba
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnupg.org/libksba"
 * console.log(pkg.versions[0]) // "1.6.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libksba.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libksbaPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnupg.org/libksba' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/libksba' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libksba/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/libksba -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.7',
    '1.6.6',
    '1.6.5',
    '1.6.4',
    '1.6.3',
    '1.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libksba',
  ] as const,
  fullPath: 'gnupg.org/libksba' as const,
}

export type LibksbaPackage = typeof libksbaPackage
