/**
 * **appium** - Crafters of fine Open Source products
 *
 * @domain `appium.io`
 *
 * @install `pkgx appium.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.appiumio
 * console.log(pkg.name)        // "appium"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/appium-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const appiumioPackage = {
  /**
   * The display name of this package.
   */
  name: 'appium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/appium.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'appium.io' as const,
  fullPath: 'appium.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx appium.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AppiumioPackage = typeof appiumioPackage
