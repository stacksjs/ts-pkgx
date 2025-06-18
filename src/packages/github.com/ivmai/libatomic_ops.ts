/**
 * **ivmai/libatomic_ops** - The atomic_ops project (Atomic memory update operations portable implementation)
 *
 * @domain `github.com/ivmai/libatomic_ops`
 * @version `7.8.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/ivmai/libatomic_ops -- $SHELL -i`
 * @aliases `ivmai/libatomic_ops`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ivmailibatomicops
 * // Or access via domain
 * const samePkg = pantry.githubcomivmailibatomic_ops
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/ivmai/libatomic_ops"
 * console.log(pkg.description) // "The atomic_ops project (Atomic memory update op..."
 * console.log(pkg.versions[0]) // "7.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ivmai/libatomic_ops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ivmailibatomicopsPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/ivmai/libatomic_ops' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ivmai/libatomic_ops' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The atomic_ops project (Atomic memory update operations portable implementation)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ivmai/libatomic_ops/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/ivmai/libatomic_ops -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.8.2',
    '7.8.0',
    '7.6.16',
    '7.4.20',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ivmai/libatomic_ops',
  ] as const,
  fullPath: 'github.com/ivmai/libatomic_ops' as const,
}

export type IvmailibatomicopsPackage = typeof ivmailibatomicopsPackage
