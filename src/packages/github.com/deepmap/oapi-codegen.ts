/**
 * **oapi-codegen** - Package from pantry: github.com/deepmap/oapi-codegen
 *
 * @domain `github.com/deepmap/oapi-codegen`
 *
 * @install `launchpad install github.com/deepmap/oapi-codegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdeepmapoapicodegen
 * console.log(pkg.name)        // "oapi-codegen"
 * console.log(pkg.description) // "Package from pantry: github.com/deepmap/oapi-co..."
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
  description: 'Package from pantry: github.com/deepmap/oapi-codegen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/deepmap/oapi-codegen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/deepmap/oapi-codegen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/deepmap/oapi-codegen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/deepmap/oapi-codegen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdeepmapoapicodegenPackage = typeof githubcomdeepmapoapicodegenPackage
