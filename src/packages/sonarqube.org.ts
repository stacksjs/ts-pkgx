/**
 * **sonarqube.org** - Go home.
 *
 * @domain `sonarqube.org`
 *
 * @install `pkgx sonarqube.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sonarqubeorg
 * console.log(pkg.name)        // "sonarqube.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sonarqube-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sonarqubeorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/sonarqube.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sonarqube.org' as const,
  fullPath: 'sonarqube.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sonarqube.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SonarqubeorgPackage = typeof sonarqubeorgPackage
