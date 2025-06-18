/**
 * **cyrus-sasl** - pkgx package
 *
 * @domain `cyrusimap.org/cyrus-sasl`
 * @version `2.1.28` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/cyrusimap-org/cyrus-sasl.md
 *
 * @install `sh <(curl https://pkgx.sh) +cyrusimap.org/cyrus-sasl -- $SHELL -i`
 * @name `cyrus-sasl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cyrussasl
 * // Or access via domain
 * const samePkg = pantry.cyrusimaporgcyrussasl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cyrus-sasl"
 * console.log(pkg.versions[0]) // "2.1.28" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cyrusimap-org/cyrus-sasl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cyrussaslPackage = {
  /**
   * The display name of this package.
   */
  name: 'cyrus-sasl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cyrusimap.org/cyrus-sasl' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cyrusimap.org/cyrus-sasl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +cyrusimap.org/cyrus-sasl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.28',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cyrusimap.org/cyrus-sasl' as const,
}

export type CyrussaslPackage = typeof cyrussaslPackage
