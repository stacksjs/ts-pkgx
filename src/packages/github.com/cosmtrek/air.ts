/**
 * **air** - Package from pantry: github.com/cosmtrek/air
 *
 * @domain `github.com/cosmtrek/air`
 *
 * @install `launchpad install github.com/cosmtrek/air`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcosmtrekair
 * console.log(pkg.name)        // "air"
 * console.log(pkg.description) // "Package from pantry: github.com/cosmtrek/air"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cosmtrek/air.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcosmtrekairPackage = {
  /**
   * The display name of this package.
   */
  name: 'air' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cosmtrek/air' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cosmtrek/air' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cosmtrek/air' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cosmtrek/air -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cosmtrek/air' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cosmtrek/air/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcosmtrekairPackage = typeof githubcomcosmtrekairPackage
