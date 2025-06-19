/**
 * **squashfs-tools-ng** - pkgx package
 *
 * @domain `github.com/AgentD/squashfs-tools-ng`
 * @programs `gensquashfs`, `rdsquashfs`, `sqfs2tar`, `tar2sqfs`, `sqfsdiff`
 * @version `1.3.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/AgentD/squashfs-tools-ng -- $SHELL -i`
 * @name `squashfs-tools-ng`
 * @dependencies `zlib.net^1`, `tukaani.org/xz^5`, `lz4.org^1`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.squashfstoolsng
 * // Or access via domain
 * const samePkg = pantry.githubcomagentdsquashfstoolsng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "squashfs-tools-ng"
 * console.log(pkg.programs)    // ["gensquashfs", "rdsquashfs", ...]
 * console.log(pkg.versions[0]) // "1.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AgentD/squashfs-tools-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const squashfstoolsngPackage = {
  /**
   * The display name of this package.
   */
  name: 'squashfs-tools-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AgentD/squashfs-tools-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AgentD/squashfs-tools-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/AgentD/squashfs-tools-ng -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gensquashfs',
    'rdsquashfs',
    'sqfs2tar',
    'tar2sqfs',
    'sqfsdiff',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'tukaani.org/xz^5',
    'lz4.org^1',
    'facebook.com/zstd^1',
    'oberhumer.com/lzo^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SquashfstoolsngPackage = typeof squashfstoolsngPackage
