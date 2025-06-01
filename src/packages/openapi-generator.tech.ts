/**
 * **openapi-generator** - Crafters of fine Open Source products
 *
 * @domain `openapi-generator.tech`
 *
 * @install `pkgx openapi-generator.tech`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openapigeneratortech
 * console.log(pkg.name)        // "openapi-generator"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openapi-generator-tech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openapigeneratortechPackage = {
  /**
   * The display name of this package.
   */
  name: 'openapi-generator' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openapi-generator.tech/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openapi-generator.tech' as const,
  fullPath: 'openapi-generator.tech' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openapi-generator.tech' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenapigeneratortechPackage = typeof openapigeneratortechPackage
