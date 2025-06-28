/**
 * **sonarscanner** - Package from pantry: sonarqube.org/sonarscanner
 *
 * @domain `sonarqube.org/sonarscanner`
 *
 * @install `launchpad install sonarqube.org/sonarscanner`
 * @dependencies `openjdk.org^21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sonarqubeorgsonarscanner
 * console.log(pkg.name)        // "sonarscanner"
 * console.log(pkg.description) // "Package from pantry: sonarqube.org/sonarscanner"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sonarqube-org/sonarscanner.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sonarqubeorgsonarscannerPackage = {
  /**
   * The display name of this package.
   */
  name: 'sonarscanner' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sonarqube.org/sonarscanner' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sonarqube.org/sonarscanner' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sonarqube.org/sonarscanner' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sonarqube.org/sonarscanner -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sonarqube.org/sonarscanner' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sonarqube.org/sonarscanner/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SonarqubeorgsonarscannerPackage = typeof sonarqubeorgsonarscannerPackage
