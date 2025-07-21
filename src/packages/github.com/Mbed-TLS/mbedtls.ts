/**
 * **mbedtls** - Package from pantry: github.com/Mbed-TLS/mbedtls
 *
 * @domain `github.com/Mbed-TLS/mbedtls`
 *
 * @install `launchpad install github.com/Mbed-TLS/mbedtls`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommbedtlsmbedtls
 * console.log(pkg.name)        // "mbedtls"
 * console.log(pkg.description) // "Package from pantry: github.com/Mbed-TLS/mbedtls"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Mbed-TLS/mbedtls.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommbedtlsmbedtlsPackage = {
  /**
   * The display name of this package.
   */
  name: 'mbedtls' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Mbed-TLS/mbedtls' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Mbed-TLS/mbedtls' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Mbed-TLS/mbedtls' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Mbed-TLS/mbedtls -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Mbed-TLS/mbedtls' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Mbed-TLS/mbedtls/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommbedtlsmbedtlsPackage = typeof githubcommbedtlsmbedtlsPackage
