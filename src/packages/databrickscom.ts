/**
 * **databricks.com** - Package from pantry: databricks.com
 *
 * @domain `databricks.com`
 *
 * @install `launchpad install databricks.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.databrickscom
 * console.log(pkg.name)        // "databricks.com"
 * console.log(pkg.description) // "Package from pantry: databricks.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/databricks-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const databrickscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'databricks.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'databricks.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: databricks.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install databricks.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +databricks.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install databricks.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/databricks.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DatabrickscomPackage = typeof databrickscomPackage
