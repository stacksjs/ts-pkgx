/**
 * **chromedriver.chromium.org** - Package from pantry: chromedriver.chromium.org
 *
 * @domain `chromedriver.chromium.org`
 *
 * @install `launchpad install chromedriver.chromium.org`
 * @dependencies `linux:gnome.org/glib^2`, `linux:mozilla.org/nss`, `linux:x.org/xcb` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chromedriverchromiumorg
 * console.log(pkg.name)        // "chromedriver.chromium.org"
 * console.log(pkg.description) // "Package from pantry: chromedriver.chromium.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chromedriver-chromium-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chromedriverchromiumorgPackage = {
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
  description: 'Package from pantry: chromedriver.chromium.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install chromedriver.chromium.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +chromedriver.chromium.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install chromedriver.chromium.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chromedriver.chromium.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ChromedriverchromiumorgPackage = typeof chromedriverchromiumorgPackage
