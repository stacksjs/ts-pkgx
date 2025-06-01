/**
 * **gradle** - Crafters of fine Open Source products
 *
 * @domain `gradle.org`
 *
 * @install `pkgx gradle.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gradleorg
 * console.log(pkg.name)        // "gradle"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gradle-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gradleorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gradle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gradle.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gradle.org' as const,
  fullPath: 'gradle.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gradle.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GradleorgPackage = typeof gradleorgPackage
