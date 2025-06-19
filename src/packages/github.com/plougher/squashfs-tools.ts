/**
 * **SquashFS-Tools** - tools to create and extract Squashfs filesystems
 *
 * @domain `github.com/plougher/squashfs-tools`
 * @programs `mksquashfs`, `unsquashfs`, `sqfscat`, `sqfstar`
 * @version `4.7.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/plougher/squashfs-tools -- $SHELL -i`
 * @aliases `SquashFS-Tools`
 * @dependencies `lz4.org@1`, `oberhumer.com/lzo@2`, `tukaani.org/xz@5`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.SquashFSTools
 * // Or access via domain
 * const samePkg = pantry.githubcomploughersquashfstools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "squashfs-tools"
 * console.log(pkg.description) // "tools to create and extract Squashfs filesystems"
 * console.log(pkg.programs)    // ["mksquashfs", "unsquashfs", ...]
 * console.log(pkg.versions[0]) // "4.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/plougher/squashfs-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const squashFSToolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'squashfs-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/plougher/squashfs-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'tools to create and extract Squashfs filesystems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/plougher/squashfs-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/plougher/squashfs-tools -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mksquashfs',
    'unsquashfs',
    'sqfscat',
    'sqfstar',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lz4.org@1',
    'oberhumer.com/lzo@2',
    'tukaani.org/xz@5',
    'facebook.com/zstd@1',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.7.0',
    '4.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'SquashFS-Tools',
  ] as const,
}

export type SquashFSToolsPackage = typeof squashFSToolsPackage
