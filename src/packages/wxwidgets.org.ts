/**
 * **wxwidgets.org** - Cross-Platform C++ GUI Library
 *
 * @domain `wxwidgets.org`
 * @programs `wx-config`, `wxrc`
 * @version `3.2.8.1` (7 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/wxwidgets-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +wxwidgets.org -- $SHELL -i`
 * @dependencies `libjpeg-turbo.org`, `libpng.org`, `simplesystems.org/libtiff`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wxwidgetsorg
 * console.log(pkg.name)        // "wxwidgets.org"
 * console.log(pkg.description) // "Cross-Platform C++ GUI Library"
 * console.log(pkg.programs)    // ["wx-config", "wxrc"]
 * console.log(pkg.versions[0]) // "3.2.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wxwidgets-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wxwidgetsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'wxwidgets.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wxwidgets.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cross-Platform C++ GUI Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wxwidgets.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +wxwidgets.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wx-config',
    'wxrc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org',
    'libpng.org',
    'simplesystems.org/libtiff',
    'pcre.org/v2',
    'libexpat.github.io',
    'zlib.net',
    'linuxx.org/smfreedesktop.org/mesa-glugtk.org/gtk3',
    'x.org/sm',
    'freedesktop.org/mesa-glu',
    'gtk.org/gtk3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.8.1',
    '3.2.8',
    '3.2.7',
    '3.2.6',
    '3.2.5',
    '3.2.4',
    '3.2.3',
  ] as const,
  fullPath: 'wxwidgets.org' as const,
  aliases: [] as const,
}

export type WxwidgetsorgPackage = typeof wxwidgetsorgPackage
