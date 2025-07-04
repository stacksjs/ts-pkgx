/**
 * **poppler-qt5** - PDF rendering library (based on the xpdf-3.0 code base)
 *
 * @domain `freedesktop.org/poppler-qt5`
 * @programs `pdfattach`, `pdfdetach`, `pdffonts`, `pdfimages`, `pdfinfo`, ... (+8 more)
 * @version `25.7.0` (22 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install poppler-qt5`
 * @name `poppler-qt5`
 * @dependencies `gnupg.org/libassuan^2`, `cairographics.org^1`, `freedesktop.org/fontconfig^2`, ... (+16 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.popplerqt5
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgpopplerqt5
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "poppler-qt5"
 * console.log(pkg.description) // "PDF rendering library (based on the xpdf-3.0 co..."
 * console.log(pkg.programs)    // ["pdfattach", "pdfdetach", ...]
 * console.log(pkg.versions[0]) // "25.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/poppler-qt5.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerqt5Package = {
  /**
   * The display name of this package.
   */
  name: 'poppler-qt5' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/poppler-qt5' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'PDF rendering library (based on the xpdf-3.0 code base)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/poppler-qt5/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install poppler-qt5' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pdfattach',
    'pdfdetach',
    'pdffonts',
    'pdfimages',
    'pdfinfo',
    'pdfseparate',
    'pdfsig',
    'pdftocairo',
    'pdftohtml',
    'pdftoppm',
    'pdftops',
    'pdftotext',
    'pdfunite',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnupg.org/libassuan^2',
    'cairographics.org^1',
    'freedesktop.org/fontconfig^2',
    'freetype.org^2',
    'gnu.org/gettext^0',
    'gnome.org/libxml2~2.13 # since 25.4.0, 2.14 changed the API version',
    'gnome.org/glib^2',
    'gnupg.org/gpgme^1',
    'gnupg.org/libgpg-error^1',
    'libjpeg-turbo.org^2',
    'libpng.org^1',
    'simplesystems.org/libtiff^4',
    'littlecms.com^2',
    'mozilla.org/nss^3',
    'openjpeg.org^2',
    'qt.io~5',
    'curl.se^8',
    'darwin:gnupg.org/libassuan^2',
    'linux:gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.7.0',
    '25.6.0',
    '25.5.0',
    '25.4.0',
    '25.3.0',
    '25.2.0',
    '25.1.0',
    '24.12.0',
    '24.11.0',
    '24.10.0',
    '24.9.0',
    '24.8.0',
    '24.7.0',
    '24.6.1',
    '24.6.0',
    '24.5.0',
    '24.4.0',
    '24.3.0',
    '24.2.0',
    '24.1.0',
    '23.12.0',
    '23.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/poppler-qt5 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install poppler-qt5' as const,
}

export type Popplerqt5Package = typeof popplerqt5Package
