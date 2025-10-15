/**
 * **oapi-codegen** - Generate Go client and server boilerplate from OpenAPI 3 specifications
 *
 * @domain `github.com/deepmap/oapi-codegen`
 * @version `2.5.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/deepmap/oapi-codegen`
 * @dependencies `go.dev@^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdeepmapoapicodegen
 * console.log(pkg.name)        // "oapi-codegen"
 * console.log(pkg.description) // "Generate Go client and server boilerplate from ..."
 * console.log(pkg.versions[0]) // "2.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/deepmap/oapi-codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdeepmapoapicodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'oapi-codegen' as const,
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
  githubUrl: 'https://github.com/oapi-codegen/oapi-codegen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/deepmap/oapi-codegen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/deepmap/oapi-codegen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/deepmap/oapi-codegen' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev@^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.0',
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
  aliases: [] as const,
}

export type GithubcomdeepmapoapicodegenPackage = typeof githubcomdeepmapoapicodegenPackage
