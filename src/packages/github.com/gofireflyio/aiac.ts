/**
 * **aiac** - Package from pantry: github.com/gofireflyio/aiac
 *
 * @domain `github.com/gofireflyio/aiac`
 *
 * @install `launchpad install github.com/gofireflyio/aiac`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgofireflyioaiac
 * console.log(pkg.name)        // "aiac"
 * console.log(pkg.description) // "Package from pantry: github.com/gofireflyio/aiac"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gofireflyio/aiac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgofireflyioaiacPackage = {
  /**
   * The display name of this package.
   */
  name: 'aiac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gofireflyio/aiac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/gofireflyio/aiac' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/gofireflyio/aiac' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/gofireflyio/aiac -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/gofireflyio/aiac' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gofireflyio/aiac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgofireflyioaiacPackage = typeof githubcomgofireflyioaiacPackage
