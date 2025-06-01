/**
 * **fastlane** - Crafters of fine Open Source products
 *
 * @domain `fastlane.tools`
 *
 * @install `pkgx fastlane.tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fastlanetools
 * console.log(pkg.name)        // "fastlane"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fastlane-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastlanetoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastlane' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fastlane.tools/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fastlane.tools' as const,
  fullPath: 'fastlane.tools' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fastlane.tools' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FastlanetoolsPackage = typeof fastlanetoolsPackage
