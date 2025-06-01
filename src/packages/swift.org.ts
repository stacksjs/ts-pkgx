/**
 * **swift** - Crafters of fine Open Source products
 *
 * @domain `swift.org`
 *
 * @install `pkgx swift.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.swiftorg
 * console.log(pkg.name)        // "swift"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swift-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/swift.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'swift.org' as const,
  fullPath: 'swift.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx swift.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SwiftorgPackage = typeof swiftorgPackage
