/**
 * **groff** - GNU troff text-formatting system
 *
 * @domain `gnu.org/groff`
 * @programs `addftinfo`, `afmtodit`, `chem`, `eqn`, `eqn2graph`, ... (+34 more)
 * @version `1.23.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/groff.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/groff -- $SHELL -i`
 * @aliases `groff`
 * @dependencies `ghostscript.com`, `netpbm.sourceforge.net`, `github.com/rrthomas/psutils`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.groff
 * // Or access via domain
 * const samePkg = pantry.gnuorggroff
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/groff"
 * console.log(pkg.description) // "GNU troff text-formatting system"
 * console.log(pkg.programs)    // ["addftinfo", "afmtodit", ...]
 * console.log(pkg.versions[0]) // "1.23.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/groff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const groffPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/groff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/groff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GNU troff text-formatting system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/groff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/groff -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'addftinfo',
    'afmtodit',
    'chem',
    'eqn',
    'eqn2graph',
    'gdiffmk',
    'glilypond',
    'gperl',
    'gpinyin',
    'grap2graph',
    'grn',
    'grodvi',
    'groff',
    'grog',
    'grolbp',
    'grolj4',
    'gropdf',
    'grops',
    'grotty',
    'hpftodit',
    'indxbib',
    'lkbib',
    'lookbib',
    'mmroff',
    'neqn',
    'nroff',
    'pdfmom',
    'pdfroff',
    'pfbtops',
    'pic',
    'pic2graph',
    'post-grohtml',
    'preconv',
    'pre-grohtml',
    'refer',
    'soelim',
    'tbl',
    'tfmtodit',
    'troff',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ghostscript.com',
    'netpbm.sourceforge.net',
    'github.com/rrthomas/psutils',
    'freedesktop.org/uchardet',
    'perl.org',
    'linuxgnome.org/glib',
    'gnome.org/glib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.23.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'groff',
  ] as const,
  fullPath: 'gnu.org/groff' as const,
}

export type GroffPackage = typeof groffPackage
