/**
 * **openjdk.org** - Crafters of fine Open Source products
 *
 * @domain `openjdk.org`
 *
 * @install `pkgx openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openjdkorg
 * console.log(pkg.name)        // "openjdk.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openjdk-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openjdkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openjdk.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openjdk.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openjdk.org' as const,
  fullPath: 'openjdk.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openjdk.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenjdkorgPackage = typeof openjdkorgPackage
