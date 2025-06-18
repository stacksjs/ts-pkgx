/**
 * **swagger.io/swagger-codegen** - pkgx package
 *
 * @domain `swagger.io/swagger/codegen`
 *
 * @install `pkgx swagger.io/swagger-codegen`
 * @name `swagger-codegen`
 * @aliases `swagger.io/swagger-codegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.swaggerioswaggercodegen
 * // Or access via domain
 * const samePkg = pantry.swaggerioswaggercodegen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swagger-codegen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swagger-io/swagger/codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swaggerioswaggercodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'swagger-codegen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'swagger.io/swagger/codegen' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx swagger.io/swagger-codegen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'swagger.io/swagger-codegen',
  ] as const,
  fullPath: 'swagger.io/swagger-codegen' as const,
}

export type SwaggerioswaggercodegenPackage = typeof swaggerioswaggercodegenPackage
