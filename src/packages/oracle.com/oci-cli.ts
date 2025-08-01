/**
 * **oci** - Command Line Interface for Oracle Cloud Infrastructure
 *
 * @domain `oracle.com/oci-cli`
 * @programs `oci`
 * @version `3.63.2` (73 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install oci`
 * @name `oci`
 * @dependencies `certifi.io/python-certifi^2024`, `pyyaml.org/libyaml^0.2`, `cryptography.io^42`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.oci
 * // Or access via domain
 * const samePkg = pantry.oraclecomocicli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oci"
 * console.log(pkg.description) // "Command Line Interface for Oracle Cloud Infrast..."
 * console.log(pkg.programs)    // ["oci"]
 * console.log(pkg.versions[0]) // "3.63.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oracle-com/oci-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ociPackage = {
  /**
   * The display name of this package.
   */
  name: 'oci' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oracle.com/oci-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command Line Interface for Oracle Cloud Infrastructure' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oracle.com/oci-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oci' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'oci',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'certifi.io/python-certifi^2024',
    'pyyaml.org/libyaml^0.2',
    'cryptography.io^42',
    'python.org^3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.63.2',
    '3.63.0',
    '3.62.2',
    '3.62.1',
    '3.62.0',
    '3.61.0',
    '3.60.0',
    '3.59.0',
    '3.58.1',
    '3.58.0',
    '3.57.0',
    '3.56.1',
    '3.56.0',
    '3.55.0',
    '3.54.6',
    '3.54.5',
    '3.54.4',
    '3.54.3',
    '3.54.2',
    '3.54.1',
    '3.54.0',
    '3.53.0',
    '3.52.1',
    '3.52.0',
    '3.51.9',
    '3.51.8',
    '3.51.7',
    '3.51.6',
    '3.51.5',
    '3.51.4',
    '3.51.3',
    '3.51.2',
    '3.51.1',
    '3.51.0',
    '3.50.3',
    '3.50.2',
    '3.50.1',
    '3.50.0',
    '3.49.4',
    '3.49.3',
    '3.49.2',
    '3.49.1',
    '3.49.0',
    '3.48.3',
    '3.48.2',
    '3.48.1',
    '3.48.0',
    '3.47.0',
    '3.46.0',
    '3.45.2',
    '3.45.1',
    '3.45.0',
    '3.44.4',
    '3.44.3',
    '3.44.2',
    '3.44.1',
    '3.44.0',
    '3.43.2',
    '3.43.1',
    '3.43.0',
    '3.42.0',
    '3.41.0',
    '3.40.3',
    '3.40.2',
    '3.40.1',
    '3.40.0',
    '3.39.1',
    '3.39.0',
    '3.38.1',
    '3.38.0',
    '3.37.14',
    '3.37.13',
    '3.37.12',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) oci -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oci' as const,
}

export type OciPackage = typeof ociPackage
