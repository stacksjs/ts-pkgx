/**
 * **temporal** - Command-line interface for running Temporal Server and interacting with Workflows, Activities, Namespaces, and other parts of Temporal
 *
 * @domain `temporal.io`
 * @programs `temporal`
 * @version `1.3.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install temporal`
 * @aliases `temporal`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.temporal
 * // Or access via domain
 * const samePkg = pantry.temporalio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "temporal.io"
 * console.log(pkg.description) // "Command-line interface for running Temporal Ser..."
 * console.log(pkg.programs)    // ["temporal"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/temporal-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const temporalPackage = {
  /**
   * The display name of this package.
   */
  name: 'temporal.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'temporal.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line interface for running Temporal Server and interacting with Workflows, Activities, Namespaces, and other parts of Temporal' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/temporal.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install temporal' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'temporal',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.0',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.0',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.0',
    '0.11.0',
    '0.10.7',
    '0.10.6',
    '0.10.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'temporal',
  ] as const,
}

export type TemporalPackage = typeof temporalPackage
