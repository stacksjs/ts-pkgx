/**
 * **swagger-codegen** - Package from pantry: swagger.io/swagger-codegen
 *
 * @domain `swagger.io/swagger-codegen`
 *
 * @install `launchpad install swagger.io/swagger-codegen`
 * @dependencies `openjdk.org^11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.swaggerioswaggercodegen
 * console.log(pkg.name)        // "swagger-codegen"
 * console.log(pkg.description) // "Package from pantry: swagger.io/swagger-codegen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swagger-io/swagger-codegen.md
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
  domain: 'swagger.io/swagger-codegen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: swagger.io/swagger-codegen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install swagger.io/swagger-codegen' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/swagger.io/swagger-codegen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SwaggerioswaggercodegenPackage = typeof swaggerioswaggercodegenPackage
