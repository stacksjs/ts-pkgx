/**
 * **python-certifi** - (Python Distribution) A carefully curated collection of Root Certificates for validating the trustworthiness of SSL certificates while verifying the identity of TLS hosts.
 *
 * @domain `certifi.io/python-certifi`
 * @version `2025.6.15` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +certifi.io/python-certifi`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.certifiiopythoncertifi
 * console.log(pkg.name)        // "python-certifi"
 * console.log(pkg.description) // "(Python Distribution) A carefully curated colle..."
 * console.log(pkg.versions[0]) // "2025.6.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certifi-io/python-certifi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const certifiiopythoncertifiPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-certifi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'certifi.io/python-certifi' as const,
  /**
   * Brief description of what this package does.
   */
  description: '(Python Distribution) A carefully curated collection of Root Certificates for validating the trustworthiness of SSL certificates while verifying the identity of TLS hosts.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/certifi.io/python-certifi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install certifi.io/python-certifi' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.6.15',
    '2025.4.26',
    '2025.1.31',
    '2024.12.14',
    '2024.8.30',
    '2024.7.4',
    '2024.6.2',
    '2024.2.2',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +certifi.io/python-certifi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install certifi.io/python-certifi' as const,
}

export type CertifiiopythoncertifiPackage = typeof certifiiopythoncertifiPackage
