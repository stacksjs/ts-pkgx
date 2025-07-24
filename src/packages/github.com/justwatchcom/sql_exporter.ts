/**
 * **sql_exporter** - Package from pantry: github.com/justwatchcom/sql_exporter
 *
 * @domain `github.com/justwatchcom/sql_exporter`
 *
 * @install `launchpad install github.com/justwatchcom/sql_exporter`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjustwatchcomsql_exporter
 * console.log(pkg.name)        // "sql_exporter"
 * console.log(pkg.description) // "Package from pantry: github.com/justwatchcom/sq..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/justwatchcom/sql_exporter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjustwatchcomsql_exporterPackage = {
  /**
   * The display name of this package.
   */
  name: 'sql_exporter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/justwatchcom/sql_exporter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/justwatchcom/sql_exporter' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/justwatchcom/sql_exporter' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/justwatchcom/sql_exporter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/justwatchcom/sql_exporter' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/justwatchcom/sql_exporter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomjustwatchcomsql_exporterPackage = typeof githubcomjustwatchcomsql_exporterPackage
