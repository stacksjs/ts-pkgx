/**
 * **ghostscript.com** - This is purely for downloads, please check the website for full information
 *
 * @domain `ghostscript.com`
 * @programs `dvipdf`, `eps2eps`, `gpcl6`, `gpcl6c`, `gpdlc`, ... (+28 more)
 * @version `10.5.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +ghostscript.com -- $SHELL -i`
 * @dependencies `zlib.net^1.2`, `libpng.org^1.6`, `libjpeg-turbo.org^2`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ghostscriptcom
 * console.log(pkg.name)        // "ghostscript.com"
 * console.log(pkg.description) // "This is purely for downloads, please check the ..."
 * console.log(pkg.programs)    // ["dvipdf", "eps2eps", ...]
 * console.log(pkg.versions[0]) // "10.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ghostscript-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ghostscriptcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ghostscript.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ghostscript.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'This is purely for downloads, please check the website for full information' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ghostscript.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +ghostscript.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dvipdf',
    'eps2eps',
    'gpcl6',
    'gpcl6c',
    'gpdlc',
    'gs',
    'gsbj',
    'gsc',
    'gsdj',
    'gsdj500',
    'gslj',
    'gslp',
    'gsnd',
    'gsx',
    'gxps',
    'gxpsc',
    'lprsetup.sh',
    'pdf2dsc',
    'pdf2ps',
    'pf2afm',
    'pfbtopfa',
    'pphs',
    'printafm',
    'ps2ascii',
    'ps2epsi',
    'ps2pdf',
    'ps2pdf12',
    'ps2pdf13',
    'ps2pdf14',
    'ps2pdfwr',
    'ps2ps',
    'ps2ps2',
    'unix-lpr.sh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1.2',
    'libpng.org^1.6',
    'libjpeg-turbo.org^2',
    'simplesystems.org/libtiff^4',
    'littlecms.com^2.15',
    'gnu.org/libidn^1.41',
    'freedesktop.org/fontconfig^2.14',
    'jbig2dec.com^0.19',
    'libexpat.github.io^2.5',
    'openjpeg.org^2.5',
    'freetype.org^2.13',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '10.5.1',
    '10.4.0',
    '10.3.1',
    '10.3.0',
    '10.2.1',
    '10.2.0',
    '10.1.2',
  ] as const,
  aliases: [] as const,
}

export type GhostscriptcomPackage = typeof ghostscriptcomPackage
