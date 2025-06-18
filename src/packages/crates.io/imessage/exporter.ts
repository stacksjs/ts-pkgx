/**
 * **crates.io/imessage-exporter** - pkgx package
 *
 * @domain `crates.io/imessage/exporter`
 *
 * @install `pkgx crates.io/imessage-exporter`
 * @name `imessage-exporter`
 * @aliases `crates.io/imessage-exporter`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesioimessageexporter
 * // Or access via domain
 * const samePkg = pantry.cratesioimessageexporter
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "imessage-exporter"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/imessage/exporter.md
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
  domain: 'crates.io/imessage/exporter' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/imessage-exporter' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/imessage-exporter',
  ] as const,
  fullPath: 'crates.io/imessage-exporter' as const,
}

export type CratesioimessageexporterPackage = typeof cratesioimessageexporterPackage
