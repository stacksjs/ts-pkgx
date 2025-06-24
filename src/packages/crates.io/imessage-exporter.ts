/**
 * **imessage-exporter** - Package from pantry: crates.io/imessage-exporter
 *
 * @domain `crates.io/imessage-exporter`
 *
 * @install `launchpad install crates.io/imessage-exporter`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioimessageexporter
 * console.log(pkg.name)        // "imessage-exporter"
 * console.log(pkg.description) // "Package from pantry: crates.io/imessage-exporter"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/imessage-exporter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioimessageexporterPackage = {
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
  description: 'Package from pantry: crates.io/imessage-exporter' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/imessage-exporter' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/imessage-exporter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/imessage-exporter' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/imessage-exporter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioimessageexporterPackage = typeof cratesioimessageexporterPackage
