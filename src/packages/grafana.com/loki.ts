/**
 * **loki** - Package from pantry: grafana.com/loki
 *
 * @domain `grafana.com/loki`
 *
 * @install `launchpad install grafana.com/loki`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.grafanacomloki
 * console.log(pkg.name)        // "loki"
 * console.log(pkg.description) // "Package from pantry: grafana.com/loki"
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
  description: 'Package from pantry: grafana.com/loki' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install grafana.com/loki' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +grafana.com/loki -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install grafana.com/loki' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/grafana.com/loki/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GrafanacomlokiPackage = typeof grafanacomlokiPackage
