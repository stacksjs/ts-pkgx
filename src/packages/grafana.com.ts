/**
 * **grafana.com** - Go home.
 *
 * @domain `grafana.com`
 *
 * @install `pkgx grafana.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.grafanacom
 * console.log(pkg.name)        // "grafana.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/grafana-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grafanacomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/grafana.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'grafana.com' as const,
  fullPath: 'grafana.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx grafana.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GrafanacomPackage = typeof grafanacomPackage
