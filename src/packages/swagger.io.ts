/**
 * **swagger.io** - Go home.
 *
 * @domain `swagger.io`
 *
 * @install `pkgx swagger.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.swaggerio
 * console.log(pkg.name)        // "swagger.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swagger-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swaggerioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/swagger.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'swagger.io' as const,
  fullPath: 'swagger.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx swagger.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SwaggerioPackage = typeof swaggerioPackage
