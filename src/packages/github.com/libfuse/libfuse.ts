/**
 * **fusermount3** - The reference implementation of the Linux FUSE (Filesystem in Userspace) interface
 *
 * @domain `github.com/libfuse/libfuse`
 * @programs `fusermount3`
 * @version `3.17.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fusermount3`
 * @name `fusermount3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fusermount3
 * // Or access via domain
 * const samePkg = pantry.githubcomlibfuselibfuse
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fusermount3"
 * console.log(pkg.description) // "The reference implementation of the Linux FUSE ..."
 * console.log(pkg.programs)    // ["fusermount3"]
 * console.log(pkg.versions[0]) // "3.17.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libfuse/libfuse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fusermount3Package = {
  /**
   * The display name of this package.
   */
  name: 'fusermount3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libfuse/libfuse' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The reference implementation of the Linux FUSE (Filesystem in Userspace) interface' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libfuse/libfuse/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fusermount3' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fusermount3',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.17.2',
    '3.17.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) fusermount3 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fusermount3' as const,
}

export type Fusermount3Package = typeof fusermount3Package
