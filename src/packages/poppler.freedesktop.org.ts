/**
 * **poppler.freedesktop.org** - pkgx package
 *
 * @domain `poppler.freedesktop.org`
 * @programs `pdfattach`, `pdfdetach`, `pdffonts`, `pdfimages`, `pdfinfo`, ... (+7 more)
 * @version `25.6.0` (17 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +poppler.freedesktop.org -- $SHELL -i`
 * @dependencies `boost.org>=1.58.0`, `cairographics.org>=1.16.0`, `curl.se`, ... (+17 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.popplerfreedesktoporg
 * console.log(pkg.name)        // "poppler.freedesktop.org"
 * console.log(pkg.programs)    // ["pdfattach", "pdfdetach", ...]
 * console.log(pkg.versions[0]) // "25.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerfreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler.freedesktop.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'poppler.freedesktop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +poppler.freedesktop.org -- $SHELL -i' as const,
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
   */
  dependencies: [
    'boost.org>=1.58.0',
    'cairographics.org>=1.16.0',
    'curl.se',
    'freedesktop.org/fontconfig>=2.13',
    'freetype.org>=2.10',
    'gnome.org/glib>=2.64',
    'gnome.org/libxml2~2.13',
    'libjpeg-turbo.org',
    'libpng.org',
    'openjpeg.org',
    'poppler.freedesktop.org/poppler-data',
    'simplesystems.org/libtiff',
    'zlib.net',
    'mozilla.org/nss>=3.68',
    'gnupg.org/gpgme~1.19',
    'gnupg.org/libgpg-error@1',
    'gnupg.org/libassuan@2',
    'littlecms.com^2.9',
    'linuxgnu.org/gcc/libstdcxx@14',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
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
    '22.12.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'poppler.freedesktop.org' as const,
}

export type PopplerfreedesktoporgPackage = typeof popplerfreedesktoporgPackage
