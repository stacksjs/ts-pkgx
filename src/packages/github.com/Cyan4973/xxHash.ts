/**
 * **xxh** - Extremely fast non-cryptographic hash algorithm
 *
 * @domain `github.com/Cyan4973/xxHash`
 * @programs `xxhsum`, `xxh32sum`, `xxh64sum`, `xxh128sum`
 * @version `0.8.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/Cyan4973/xxHash -- $SHELL -i`
 * @aliases `xxh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xxh
 * // Or access via domain
 * const samePkg = pantry.githubcomcyan4973xxhash
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xxHash"
 * console.log(pkg.description) // "Extremely fast non-cryptographic hash algorithm"
 * console.log(pkg.programs)    // ["xxhsum", "xxh32sum", ...]
 * console.log(pkg.versions[0]) // "0.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Cyan4973/xxHash.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xxhPackage = {
  /**
   * The display name of this package.
   */
  name: 'xxHash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Cyan4973/xxHash' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Extremely fast non-cryptographic hash algorithm' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Cyan4973/xxHash/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/Cyan4973/xxHash -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xxhsum',
    'xxh32sum',
    'xxh64sum',
    'xxh128sum',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.3',
    '0.8.2',
    '0.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xxh',
  ] as const,
}

export type XxhPackage = typeof xxhPackage
