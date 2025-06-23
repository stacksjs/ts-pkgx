/**
 * **swagger-codegen** - swagger-codegen contains a template-driven engine to generate documentation, API clients and server stubs in different languages by parsing your OpenAPI / Swagger definition.
 *
 * @domain `swagger.io/swagger-codegen`
 * @programs `swagger-codegen`
 * @version `3.0.69` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install swagger-codegen`
 * @name `swagger-codegen`
 * @dependencies `openjdk.org^11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.swaggercodegen
 * // Or access via domain
 * const samePkg = pantry.swaggerioswaggercodegen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swagger-codegen"
 * console.log(pkg.description) // "swagger-codegen contains a template-driven engi..."
 * console.log(pkg.programs)    // ["swagger-codegen"]
 * console.log(pkg.versions[0]) // "3.0.69" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swagger-io/swagger-codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swaggercodegenPackage = {
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
  description: 'swagger-codegen contains a template-driven engine to generate documentation, API clients and server stubs in different languages by parsing your OpenAPI / Swagger definition.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/swagger.io/swagger-codegen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install swagger-codegen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'swagger-codegen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.69',
    '3.0.68',
    '3.0.67',
    '3.0.66',
    '3.0.65',
    '3.0.64',
    '3.0.63',
    '3.0.62',
    '3.0.61',
    '3.0.60',
    '3.0.59',
    '3.0.58',
    '3.0.57',
    '3.0.56',
    '3.0.55',
    '3.0.54',
    '2.4.45',
    '2.4.44',
    '2.4.43',
    '2.4.42',
    '2.4.41',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) swagger-codegen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install swagger-codegen' as const,
}

export type SwaggercodegenPackage = typeof swaggercodegenPackage
