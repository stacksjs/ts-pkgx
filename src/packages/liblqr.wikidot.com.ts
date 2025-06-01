/**
 * **+liblqr.wikidot.com -- $SHELL -i** - Liquid Rescale library
 *
 * @domain `liblqr.wikidot.com`
 * @version `0.4.3` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/liblqr-wikidot-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +liblqr.wikidot.com -- $SHELL -i`
 * @aliases `+liblqr.wikidot.com -- $SHELL -i`
 * @dependencies `gnome.org/glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.liblqrwikidotcomSHELLi
 * // Or access via domain
 * const samePkg = pantry.liblqrwikidotcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "liblqr.wikidot.com"
 * console.log(pkg.description) // "Liquid Rescale library"
 * console.log(pkg.versions[0]) // "0.4.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/liblqr-wikidot-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liblqrwikidotcomSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'liblqr.wikidot.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'liblqr.wikidot.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Liquid Rescale library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/liblqr.wikidot.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +liblqr.wikidot.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.3',
    '0.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+liblqr.wikidot.com -- $SHELL -i',
  ] as const,
  fullPath: 'liblqr.wikidot.com' as const,
}

export type LiblqrwikidotcomSHELLiPackage = typeof liblqrwikidotcomSHELLiPackage
