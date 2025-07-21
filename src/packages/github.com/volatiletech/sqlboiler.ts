/**
 * **sqlboiler** - Package from pantry: github.com/volatiletech/sqlboiler
 *
 * @domain `github.com/volatiletech/sqlboiler`
 *
 * @install `launchpad install github.com/volatiletech/sqlboiler`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomvolatiletechsqlboiler
 * console.log(pkg.name)        // "sqlboiler"
 * console.log(pkg.description) // "Package from pantry: github.com/volatiletech/sq..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/volatiletech/sqlboiler.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomvolatiletechsqlboilerPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlboiler' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/volatiletech/sqlboiler' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/volatiletech/sqlboiler' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/volatiletech/sqlboiler' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/volatiletech/sqlboiler -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/volatiletech/sqlboiler' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/volatiletech/sqlboiler/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomvolatiletechsqlboilerPackage = typeof githubcomvolatiletechsqlboilerPackage
