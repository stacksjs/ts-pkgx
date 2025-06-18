/**
 * **python-certifi** - (Python Distribution) A carefully curated collection of Root Certificates for validating the trustworthiness of SSL certificates while verifying the identity of TLS hosts.
 *
 * @domain `certifi.io/python-certifi`
 * @version `2025.6.15` (8 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/certifi-io/python-certifi.md
 *
 * @install `sh <(curl https://pkgx.sh) +certifi.io/python-certifi -- $SHELL -i`
 * @aliases `python-certifi`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pythoncertifi
 * // Or access via domain
 * const samePkg = pantry.certifiiopythoncertifi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "certifi.io/python-certifi"
 * console.log(pkg.description) // "(Python Distribution) A carefully curated colle..."
 * console.log(pkg.versions[0]) // "2025.6.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certifi-io/python-certifi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythoncertifiPackage = {
  /**
   * The display name of this package.
   */
  name: 'certifi.io/python-certifi' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +certifi.io/python-certifi -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'python-certifi',
  ] as const,
  fullPath: 'certifi.io/python-certifi' as const,
}

export type PythoncertifiPackage = typeof pythoncertifiPackage
