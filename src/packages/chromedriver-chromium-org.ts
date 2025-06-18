/**
 * **chromedriver** - pkgx package
 *
 * @domain `chromedriver.chromium.org`
 * @programs `chromedriver`
 * @version `114.0.5735.90` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) chromedriver`
 * @name `chromedriver`
 * @dependencies `linuxgnome.org/glib^2mozilla.org/nssx.org/xcb`, `gnome.org/glib^2`, `mozilla.org/nss`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.chromedriver
 * // Or access via domain
 * const samePkg = pantry.chromedriverchromiumorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chromedriver"
 * console.log(pkg.programs)    // ["chromedriver"]
 * console.log(pkg.versions[0]) // "114.0.5735.90" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chromedriver-chromium-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chromedriverPackage = {
  /**
   * The display name of this package.
   */
  name: 'chromedriver' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chromedriver.chromium.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chromedriver.chromium.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) chromedriver' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'chromedriver',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxgnome.org/glib^2mozilla.org/nssx.org/xcb',
    'gnome.org/glib^2',
    'mozilla.org/nss',
    'x.org/xcb',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '114.0.5735.90',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'chromedriver.chromium.org' as const,
}

export type ChromedriverPackage = typeof chromedriverPackage
