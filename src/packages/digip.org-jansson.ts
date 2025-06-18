/**
 * **jansson** - C library for encoding, decoding and manipulating JSON data
 *
 * @domain `digip.org/jansson`
 * @version `2.14.1` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/digip-org/jansson.md
 *
 * @install `sh <(curl https://pkgx.sh) +digip.org/jansson -- $SHELL -i`
 * @aliases `jansson`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jansson
 * // Or access via domain
 * const samePkg = pantry.digiporgjansson
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "digip.org/jansson"
 * console.log(pkg.description) // "C library for encoding, decoding and manipulati..."
 * console.log(pkg.versions[0]) // "2.14.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digip-org/jansson.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const janssonPackage = {
  /**
   * The display name of this package.
   */
  name: 'digip.org/jansson' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digip.org/jansson' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C library for encoding, decoding and manipulating JSON data' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/digip.org/jansson/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +digip.org/jansson -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.14.1',
    '2.14.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jansson',
  ] as const,
  fullPath: 'digip.org/jansson' as const,
}

export type JanssonPackage = typeof janssonPackage
