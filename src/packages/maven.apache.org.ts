/**
 * **mvn** - Crafters of fine Open Source products
 *
 * @domain `maven.apache.org`
 *
 * @install `pkgx maven.apache.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mavenapacheorg
 * console.log(pkg.name)        // "mvn"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maven-apache-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mavenapacheorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mvn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/maven.apache.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'maven.apache.org' as const,
  fullPath: 'maven.apache.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx maven.apache.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MavenapacheorgPackage = typeof mavenapacheorgPackage
