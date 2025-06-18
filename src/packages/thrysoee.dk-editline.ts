/**
 * **editline** - pkgx package
 *
 * @domain `thrysoee.dk/editline`
 * @version `3.1.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/thrysoee-dk/editline.md
 *
 * @install `sh <(curl https://pkgx.sh) +thrysoee.dk/editline -- $SHELL -i`
 * @aliases `editline`
 * @dependencies `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.editline
 * // Or access via domain
 * const samePkg = pantry.thrysoeedkeditline
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thrysoee.dk/editline"
 * console.log(pkg.versions[0]) // "3.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thrysoee-dk/editline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const editlinePackage = {
  /**
   * The display name of this package.
   */
  name: 'thrysoee.dk/editline' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thrysoee.dk/editline' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from thrysoee.dk/editline' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/thrysoee.dk/editline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +thrysoee.dk/editline -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'editline',
  ] as const,
  fullPath: 'thrysoee.dk/editline' as const,
}

export type EditlinePackage = typeof editlinePackage
