/**
 * **quickwit** - Cloud-native search engine for observability. An open-source alternative to Datadog, Elasticsearch, Loki, and Tempo.
 *
 * @domain `quickwit.io`
 * @programs `quickwit`
 * @version `0.8.2` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install quickwit`
 * @name `quickwit`
 * @dependencies `protobuf.dev^25`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.quickwit
 * // Or access via domain
 * const samePkg = pantry.quickwitio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "quickwit"
 * console.log(pkg.description) // "Cloud-native search engine for observability. A..."
 * console.log(pkg.programs)    // ["quickwit"]
 * console.log(pkg.versions[0]) // "0.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/quickwit-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quickwitPackage = {
  /**
   * The display name of this package.
   */
  name: 'quickwit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'quickwit.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cloud-native search engine for observability. An open-source alternative to Datadog, Elasticsearch, Loki, and Tempo.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/quickwit.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install quickwit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'quickwit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev^25',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.5',
    '0.6.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) quickwit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install quickwit' as const,
}

export type QuickwitPackage = typeof quickwitPackage
