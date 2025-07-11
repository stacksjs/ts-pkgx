/**
 * **imessage-exporter** - Command-line tool to export and inspect local iMessage database
 *
 * @domain `crates.io/imessage-exporter`
 * @programs `imessage-exporter`
 * @version `3.0.1` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install imessage-exporter`
 * @name `imessage-exporter`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.imessageexporter
 * // Or access via domain
 * const samePkg = pantry.cratesioimessageexporter
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "imessage-exporter"
 * console.log(pkg.description) // "Command-line tool to export and inspect local i..."
 * console.log(pkg.programs)    // ["imessage-exporter"]
 * console.log(pkg.versions[0]) // "3.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/imessage-exporter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const imessageexporterPackage = {
  /**
   * The display name of this package.
   */
  name: 'imessage-exporter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/imessage-exporter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line tool to export and inspect local iMessage database' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/imessage-exporter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install imessage-exporter' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'imessage-exporter',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.1',
    '3.0.0',
    '2.8.0',
    '2.7.1',
    '2.7.0',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.0',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.1',
    '2.1.0',
    '2.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) imessage-exporter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install imessage-exporter' as const,
}

export type ImessageexporterPackage = typeof imessageexporterPackage
