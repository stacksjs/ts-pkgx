/**
 * **loki** - Horizontally-scalable, highly-available log aggregation system
 *
 * @domain `grafana.com/loki`
 * @programs `loki`
 * @version `3.5.7` (28 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install grafana.com/loki`
 * @homepage https://grafana.com/loki
 * @dependencies `go.dev@=1.21.8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.grafanacomloki
 * console.log(pkg.name)        // "loki"
 * console.log(pkg.description) // "Horizontally-scalable, highly-available log agg..."
 * console.log(pkg.programs)    // ["loki"]
 * console.log(pkg.versions[0]) // "3.5.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/grafana-com/loki.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grafanacomlokiPackage = {
  /**
   * The display name of this package.
   */
  name: 'loki' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'grafana.com/loki' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Horizontally-scalable, highly-available log aggregation system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/grafana.com/loki/package.yml' as const,
  homepageUrl: 'https://grafana.com/loki' as const,
  githubUrl: 'https://github.com/grafana/loki' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install grafana.com/loki' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +grafana.com/loki -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install grafana.com/loki' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'loki',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev@=1.21.8',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.7',
    '3.5.6',
    '3.5.5',
    '3.5.4',
    '3.5.3',
    '3.5.2',
    '3.5.1',
    '3.5.0',
    '3.4.6',
    '3.4.5',
    '3.4.4',
    '3.4.3',
    '3.4.2',
    '3.4.1',
    '3.4.0',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '2.9.15',
    '2.9.14',
    '2.9.13',
    '2.9.12',
    '2.9.11',
  ] as const,
  aliases: [] as const,
}

export type GrafanacomlokiPackage = typeof grafanacomlokiPackage
