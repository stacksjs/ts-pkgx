/**
 * **chromedriver** - Crafters of fine Open Source products
 *
 * @domain `chromedriver.chromium.org`
 *
 * @install `pkgx chromedriver.chromium.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chromedriverchromiumorg
 * console.log(pkg.name)        // "chromedriver"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chromedriver-chromium-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chromedriverchromiumorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'chromedriver' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/chromedriver.chromium.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chromedriver.chromium.org' as const,
  fullPath: 'chromedriver.chromium.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx chromedriver.chromium.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ChromedriverchromiumorgPackage = typeof chromedriverchromiumorgPackage
