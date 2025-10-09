/**
 * **sonar-scanner** - Scanner CLI for SonarQube (Server, Cloud)
 *
 * @domain `sonarqube.org/sonarscanner`
 * @programs `sonar-scanner`, `sonar-scanner-debug`
 * @version `7.3.0.5189` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sonar-scanner`
 * @name `sonar-scanner`
 * @dependencies `openjdk.org^21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sonarscanner
 * // Or access via domain
 * const samePkg = pantry.sonarqubeorgsonarscanner
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sonar-scanner"
 * console.log(pkg.description) // "Scanner CLI for SonarQube (Server, Cloud)"
 * console.log(pkg.programs)    // ["sonar-scanner", "sonar-scanner-debug"]
 * console.log(pkg.versions[0]) // "7.3.0.5189" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sonarqube-org/sonarscanner.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sonarscannerPackage = {
  /**
   * The display name of this package.
   */
  name: 'sonar-scanner' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sonarqube.org/sonarscanner' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Scanner CLI for SonarQube (Server, Cloud)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sonarqube.org/sonarscanner/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sonar-scanner' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sonar-scanner',
    'sonar-scanner-debug',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.3.0.5189',
    '7.2.0.5079',
    '7.1.0.4889',
    '7.0.2.4839',
    '7.0.1.4817',
    '7.0.0.4796',
    '6.2.1.4610',
    '6.2.0.4584',
    '6.1.0.4477',
    '6.0.0.4432',
    '5.0.2.4997',
    '5.0.1.3006',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sonarqube.org/sonarscanner -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sonar-scanner' as const,
}

export type SonarscannerPackage = typeof sonarscannerPackage
