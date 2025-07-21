/**
 * **oapi-codegen** - Package from pantry: github.com/oapi-codegen/oapi-codegen
 *
 * @domain `github.com/oapi-codegen/oapi-codegen`
 *
 * @install `launchpad install github.com/oapi-codegen/oapi-codegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomoapicodegenoapicodegen
 * console.log(pkg.name)        // "oapi-codegen"
 * console.log(pkg.description) // "Package from pantry: github.com/oapi-codegen/oa..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oapi-codegen/oapi-codegen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoapicodegenoapicodegenPackage = {
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
  description: 'Package from pantry: github.com/oapi-codegen/oapi-codegen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/oapi-codegen/oapi-codegen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/oapi-codegen/oapi-codegen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/oapi-codegen/oapi-codegen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oapi-codegen/oapi-codegen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomoapicodegenoapicodegenPackage = typeof githubcomoapicodegenoapicodegenPackage
