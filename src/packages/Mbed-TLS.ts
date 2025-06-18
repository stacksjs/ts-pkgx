/**
 * **Mbed-TLS** - pkgx package
 *
 * @domain `github.com/Mbed-TLS`
 *
 * @install `pkgx github.com/Mbed-TLS`
 * @name `Mbed-TLS`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.MbedTLS
 * // Or access via domain
 * const samePkg = pantry.githubcommbedtls
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Mbed-TLS"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Mbed-TLS.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mbedTLSPackage = {
  /**
   * The display name of this package.
   */
  name: 'Mbed-TLS' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Mbed-TLS' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Mbed-TLS' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Mbed-TLS' as const,
}

export type MbedTLSPackage = typeof mbedTLSPackage
