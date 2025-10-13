/**
 * **wxwidgets.org** - Cross-Platform C++ GUI Library
 *
 * @domain `wxwidgets.org`
 * @programs `wx-config`, `wxrc`
 * @version `3.3.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wxwidgets.org`
 * @dependencies `libjpeg-turbo.org`, `libpng.org`, `simplesystems.org/libtiff`, ... (+6 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wxwidgetsorg
 * console.log(pkg.name)        // "wxwidgets.org"
 * console.log(pkg.description) // "Cross-Platform C++ GUI Library"
 * console.log(pkg.programs)    // ["wx-config", "wxrc"]
 * console.log(pkg.versions[0]) // "3.3.1" (latest)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wxwidgets.org' as const,
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libjpeg-turbo.org',
    'libpng.org',
    'simplesystems.org/libtiff',
    'pcre.org/v2',
    'libexpat.github.io',
    'zlib.net',
    'linux:x.org/sm',
    'linux:freedesktop.org/mesa-glu',
    'linux:gtk.org/gtk3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.1',
    '3.3.0',
    '3.2.8.1',
    '3.2.8',
    '3.2.7',
    '3.2.6',
    '3.2.5',
    '3.2.4',
    '3.2.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wxwidgets.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wxwidgets.org' as const,
}

export type WxwidgetsorgPackage = typeof wxwidgetsorgPackage
