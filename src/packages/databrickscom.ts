/**
 * **databricks** - Databricks CLI
 *
 * @domain `databricks.com`
 * @programs `databricks`
 * @version `0.268.0` (69 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install databricks`
 * @name `databricks`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.databricks
 * // Or access via domain
 * const samePkg = pantry.databrickscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "databricks"
 * console.log(pkg.description) // "Databricks CLI"
 * console.log(pkg.programs)    // ["databricks"]
 * console.log(pkg.versions[0]) // "0.268.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/databricks-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const databricksPackage = {
  /**
   * The display name of this package.
   */
  name: 'databricks' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'databricks.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Databricks CLI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/databricks.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install databricks' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'databricks',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.268.0',
    '0.267.0',
    '0.266.0',
    '0.265.0',
    '0.264.2',
    '0.264.1',
    '0.264.0',
    '0.263.0',
    '0.262.0',
    '0.261.0',
    '0.260.0',
    '0.259.0',
    '0.258.0',
    '0.257.0',
    '0.256.0',
    '0.255.0',
    '0.254.0',
    '0.253.0',
    '0.252.0',
    '0.251.0',
    '0.250.0',
    '0.249.0',
    '0.248.0',
    '0.247.1',
    '0.247.0',
    '0.246.0',
    '0.245.0',
    '0.244.0',
    '0.243.0',
    '0.242.0',
    '0.241.2',
    '0.241.1',
    '0.241.0',
    '0.240.0',
    '0.239.1',
    '0.239.0',
    '0.238.0',
    '0.237.0',
    '0.236.0',
    '0.235.0',
    '0.234.0',
    '0.233.0',
    '0.232.1',
    '0.232.0',
    '0.231.0',
    '0.230.0',
    '0.229.0',
    '0.228.1',
    '0.228.0',
    '0.227.1',
    '0.227.0',
    '0.226.0',
    '0.225.0',
    '0.224.1',
    '0.224.0',
    '0.223.2',
    '0.223.1',
    '0.223.0',
    '0.222.0',
    '0.221.1',
    '0.221.0',
    '0.220.0',
    '0.219.0',
    '0.218.1',
    '0.218.0',
    '0.217.1',
    '0.217.0',
    '0.216.0',
    '0.215.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) databricks -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install databricks' as const,
}

export type DatabricksPackage = typeof databricksPackage
