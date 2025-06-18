/**
 * **oapi-codegen** - Generate Go client and server boilerplate from OpenAPI 3 specifications
 *
 * @domain `github.com/oapi-codegen/oapi-codegen`
 * @programs `oapi-codegen`
 * @version `2.4.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install oapi-codegen`
 * @name `oapi-codegen`
 * @aliases `oapi-codegen/oapi-codegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.oapicodegen
 * // Or access via domain
 * const samePkg = pantry.githubcomoapicodegenoapicodegen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oapi-codegen"
 * console.log(pkg.description) // "Generate Go client and server boilerplate from ..."
 * console.log(pkg.programs)    // ["oapi-codegen"]
 * console.log(pkg.versions[0]) // "2.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oapi-codegen/oapi-codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oapicodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'oapi-codegen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oapi-codegen/oapi-codegen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate Go client and server boilerplate from OpenAPI 3 specifications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oapi-codegen/oapi-codegen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install oapi-codegen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'oapi-codegen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.1',
    '2.4.0',
    '2.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'oapi-codegen/oapi-codegen',
  ] as const,
  fullPath: 'github.com/oapi-codegen/oapi-codegen' as const,
}

export type OapicodegenPackage = typeof oapicodegenPackage
