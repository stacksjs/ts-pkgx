/**
 * **ca-certs** - pkgx package
 *
 * @domain `curl.se/ca-certs`
 * @version `2025.5.20` (20 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/curl-se/ca-certs.md
 *
 * @install `sh <(curl https://pkgx.sh) +curl.se/ca-certs -- $SHELL -i`
 * @aliases `ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cacerts
 * // Or access via domain
 * const samePkg = pantry.curlsecacerts
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "curl.se/ca-certs"
 * console.log(pkg.versions[0]) // "2025.5.20" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curl-se/ca-certs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cacertsPackage = {
  /**
   * The display name of this package.
   */
  name: 'curl.se/ca-certs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curl.se/ca-certs' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curl.se/ca-certs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +curl.se/ca-certs -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.5.20',
    '2025.2.25',
    '2024.12.31',
    '2024.11.26',
    '2024.9.24',
    '2024.7.2',
    '2024.3.11',
    '2023.12.12',
    '2023.8.22',
    '2023.5.30',
    '2023.1.10',
    '2022.10.11',
    '2022.7.19',
    '2022.4.26',
    '2022.3.29',
    '2022.3.18',
    '2022.2.1',
    '2021.10.26',
    '2021.9.30',
    '2021.7.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ca-certs',
  ] as const,
  fullPath: 'curl.se/ca-certs' as const,
}

export type CacertsPackage = typeof cacertsPackage
