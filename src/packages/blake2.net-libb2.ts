/**
 * **libb2** - C library providing BLAKE2b, BLAKE2s, BLAKE2bp, BLAKE2sp
 *
 * @domain `blake2.net/libb2`
 * @version `0.98.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/blake2-net/libb2.md
 *
 * @install `sh <(curl https://pkgx.sh) +blake2.net/libb2 -- $SHELL -i`
 * @aliases `libb2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libb2
 * // Or access via domain
 * const samePkg = pantry.blake2netlibb2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "blake2.net/libb2"
 * console.log(pkg.description) // "C library providing BLAKE2b, BLAKE2s, BLAKE2bp,..."
 * console.log(pkg.versions[0]) // "0.98.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/blake2-net/libb2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libb2Package = {
  /**
   * The display name of this package.
   */
  name: 'blake2.net/libb2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'blake2.net/libb2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C library providing BLAKE2b, BLAKE2s, BLAKE2bp, BLAKE2sp' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/blake2.net/libb2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +blake2.net/libb2 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.98.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libb2',
  ] as const,
  fullPath: 'blake2.net/libb2' as const,
}

export type Libb2Package = typeof libb2Package
