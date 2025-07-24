/**
 * **talhelper** - Package from pantry: budimanjojo.github.io/talhelper
 *
 * @domain `budimanjojo.github.io/talhelper`
 *
 * @install `launchpad install budimanjojo.github.io/talhelper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.budimanjojogithubiotalhelper
 * console.log(pkg.name)        // "talhelper"
 * console.log(pkg.description) // "Package from pantry: budimanjojo.github.io/talh..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/budimanjojo-github-io/talhelper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const budimanjojogithubiotalhelperPackage = {
  /**
   * The display name of this package.
   */
  name: 'talhelper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'budimanjojo.github.io/talhelper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: budimanjojo.github.io/talhelper' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install budimanjojo.github.io/talhelper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +budimanjojo.github.io/talhelper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install budimanjojo.github.io/talhelper' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/budimanjojo.github.io/talhelper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BudimanjojogithubiotalhelperPackage = typeof budimanjojogithubiotalhelperPackage
