/**
 * **generic_sum** - An open source, portable, easy to use, readable and flexible TLS library, and reference implementation of the PSA Cryptography API. Releases are on a varying cadence, typically around 3 - 6 months between releases.
 *
 * @domain `github.com/Mbed-TLS/mbedtls`
 * @programs `generic_sum`
 * @version `3.6.3.1` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install generic_sum`
 * @name `generic_sum`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.genericsum
 * // Or access via domain
 * const samePkg = pantry.githubcommbedtlsmbedtls
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "generic_sum"
 * console.log(pkg.description) // "An open source, portable, easy to use, readable..."
 * console.log(pkg.programs)    // ["generic_sum"]
 * console.log(pkg.versions[0]) // "3.6.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Mbed-TLS/mbedtls.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const genericsumPackage = {
  /**
   * The display name of this package.
   */
  name: 'generic_sum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Mbed-TLS/mbedtls' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An open source, portable, easy to use, readable and flexible TLS library, and reference implementation of the PSA Cryptography API. Releases are on a varying cadence, typically around 3 - 6 months between releases.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Mbed-TLS/mbedtls/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install generic_sum' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'generic_sum',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.3.1',
    '3.6.0',
    '3.5.2',
    '3.5.1',
    '3.4.1',
    '3.4.0',
    '2.28.8',
    '2.28.7',
    '2.28.6',
    '2.28.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) generic_sum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install generic_sum' as const,
}

export type GenericsumPackage = typeof genericsumPackage
