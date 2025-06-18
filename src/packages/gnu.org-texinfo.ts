/**
 * **texinfo** - Official documentation format of the GNU project
 *
 * @domain `gnu.org/texinfo`
 * @programs `info`, `install-info`, `makeinfo`, `pdftexi2dvi`, `pod2texi`, ... (+4 more)
 * @version `7.2.0` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/texinfo.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/texinfo -- $SHELL -i`
 * @aliases `texinfo`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.texinfo
 * // Or access via domain
 * const samePkg = pantry.gnuorgtexinfo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/texinfo"
 * console.log(pkg.description) // "Official documentation format of the GNU project"
 * console.log(pkg.programs)    // ["info", "install-info", ...]
 * console.log(pkg.versions[0]) // "7.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/texinfo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const texinfoPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/texinfo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/texinfo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official documentation format of the GNU project' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/texinfo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/texinfo -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'info',
    'install-info',
    'makeinfo',
    'pdftexi2dvi',
    'pod2texi',
    'texi2any',
    'texi2dvi',
    'texi2pdf',
    'texindex',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.2.0',
    '7.1.1',
    '7.1.0',
    '7.0.3',
    '7.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'texinfo',
  ] as const,
  fullPath: 'gnu.org/texinfo' as const,
}

export type TexinfoPackage = typeof texinfoPackage
