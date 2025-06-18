/**
 * **asn1** - ASN.1 structure parser library
 *
 * @domain `gnu.org/libtasn1`
 * @programs `asn1Coding`, `asn1Decoding`, `asn1Parser`
 * @version `4.20.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/libtasn1 -- $SHELL -i`
 * @name `asn1`
 * @aliases `libtasn1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.asn1
 * // Or access via domain
 * const samePkg = pantry.gnuorglibtasn1
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "asn1"
 * console.log(pkg.description) // "ASN.1 structure parser library"
 * console.log(pkg.programs)    // ["asn1Coding", "asn1Decoding", ...]
 * console.log(pkg.versions[0]) // "4.20.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libtasn1.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asn1Package = {
  /**
   * The display name of this package.
   */
  name: 'asn1' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libtasn1' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'ASN.1 structure parser library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtasn1/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libtasn1 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'asn1Coding',
    'asn1Decoding',
    'asn1Parser',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.20.0',
    '4.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libtasn1',
  ] as const,
  fullPath: 'gnu.org/libtasn1' as const,
}

export type Asn1Package = typeof asn1Package
