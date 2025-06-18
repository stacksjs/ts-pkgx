/**
 * **deepmap/oapi-codegen** - Generate Go client and server boilerplate from OpenAPI 3 specifications
 *
 * @domain `github.com/deepmap/oapi-codegen`
 * @version `2.4.1` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/deepmap/oapi-codegen -- $SHELL -i`
 * @aliases `deepmap/oapi-codegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.deepmapoapicodegen
 * // Or access via domain
 * const samePkg = pantry.githubcomdeepmapoapicodegen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/deepmap/oapi-codegen"
 * console.log(pkg.description) // "Generate Go client and server boilerplate from ..."
 * console.log(pkg.versions[0]) // "2.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/deepmap/oapi-codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const deepmapoapicodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/deepmap/oapi-codegen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/deepmap/oapi-codegen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate Go client and server boilerplate from OpenAPI 3 specifications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/deepmap/oapi-codegen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/deepmap/oapi-codegen -- $SHELL -i' as const,
  programs: [] as const,
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
    '2.2.0',
    '2.1.0',
    '2.0.0',
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'deepmap/oapi-codegen',
  ] as const,
  fullPath: 'github.com/deepmap/oapi-codegen' as const,
}

export type DeepmapoapicodegenPackage = typeof deepmapoapicodegenPackage
