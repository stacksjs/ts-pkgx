/**
 * **+wimlib.net -- $SHELL -i** - Library to create, extract, and modify Windows Imaging files
 *
 * @domain `wimlib.net`
 * @programs `mkwinpeimg`, `wimappend`, `wimapply`, `wimapply`, `wimdelete`, ... (+13 more)
 * @version `1.14.4` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/wimlib-net.md
 *
 * @install `sh <(curl https://pkgx.sh) +wimlib.net -- $SHELL -i`
 * @aliases `+wimlib.net -- $SHELL -i`
 * @dependencies `openssl.org^3.1.0`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.wimlibnetSHELLi
 * // Or access via domain
 * const samePkg = pantry.wimlibnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wimlib.net"
 * console.log(pkg.description) // "Library to create, extract, and modify Windows ..."
 * console.log(pkg.programs)    // ["mkwinpeimg", "wimappend", ...]
 * console.log(pkg.versions[0]) // "1.14.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wimlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wimlibnetSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'wimlib.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wimlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library to create, extract, and modify Windows Imaging files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wimlib.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +wimlib.net -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mkwinpeimg',
    'wimappend',
    'wimapply',
    'wimapply',
    'wimdelete',
    'wimdir',
    'wimexport',
    'wimextract',
    'wiminfo',
    'wimjoin',
    'wimlib-imagex',
    'wimmount',
    'wimmountrw',
    'wimoptimize',
    'wimsplit',
    'wimunmount',
    'wimupdate',
    'wimverify',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^3.1.0',
    'gnome.org/libxml2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.4',
    '1.14.3',
    '1.14.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+wimlib.net -- $SHELL -i',
  ] as const,
  fullPath: 'wimlib.net' as const,
}

export type WimlibnetSHELLiPackage = typeof wimlibnetSHELLiPackage
