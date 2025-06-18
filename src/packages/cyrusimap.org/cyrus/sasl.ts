/**
 * **cyrusimap.org/cyrus-sasl** - pkgx package
 *
 * @domain `cyrusimap.org/cyrus/sasl`
 *
 * @install `pkgx cyrusimap.org/cyrus-sasl`
 * @name `cyrus-sasl`
 * @aliases `cyrusimap.org/cyrus-sasl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cyrusimaporgcyrussasl
 * // Or access via domain
 * const samePkg = pantry.cyrusimaporgcyrussasl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cyrus-sasl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cyrusimap-org/cyrus/sasl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cyrusimaporgcyrussaslPackage = {
  /**
   * The display name of this package.
   */
  name: 'cyrus-sasl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cyrusimap.org/cyrus/sasl' as const,
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
  installCommand: 'pkgx cyrusimap.org/cyrus-sasl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cyrusimap.org/cyrus-sasl',
  ] as const,
  fullPath: 'cyrusimap.org/cyrus-sasl' as const,
}

export type CyrusimaporgcyrussaslPackage = typeof cyrusimaporgcyrussaslPackage
