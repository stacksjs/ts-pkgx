/**
 * **libatomic_ops** - The atomic_ops project (Atomic memory update operations portable implementation)
 *
 * @domain `github.com/ivmai/libatomic_ops`
 * @version `7.8.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/ivmai/libatomic_ops -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomivmailibatomic_ops
 * console.log(pkg.name)        // "libatomic_ops"
 * console.log(pkg.description) // "The atomic_ops project (Atomic memory update op..."
 * console.log(pkg.versions[0]) // "7.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ivmai/libatomic_ops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomivmailibatomic_opsPackage = {
  /**
   * The display name of this package.
   */
  name: 'libatomic_ops' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/ivmai/libatomic_ops -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type Githubcomivmailibatomic_opsPackage = typeof githubcomivmailibatomic_opsPackage
