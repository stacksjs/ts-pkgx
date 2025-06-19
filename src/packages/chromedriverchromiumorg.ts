/**
 * **chromedriver** - pkgx package
 *
 * @domain `chromedriver.chromium.org`
 * @programs `chromedriver`
 * @version `114.0.5735.90` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install chromedriver`
 * @aliases `chromedriver`
 * @dependencies `linux:gnome.org/glib^2`, `linux:mozilla.org/nss`, `linux:x.org/xcb` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.chromedriver
 * // Or access via domain
 * const samePkg = pantry.chromedriverchromiumorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chromedriver.chromium.org"
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
  name: 'chromedriver.chromium.org' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install chromedriver' as const,
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnome.org/glib^2',
    'linux:mozilla.org/nss',
    'linux:x.org/xcb',
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
  aliases: [
    'chromedriver',
  ] as const,
}

export type ChromedriverPackage = typeof chromedriverPackage
