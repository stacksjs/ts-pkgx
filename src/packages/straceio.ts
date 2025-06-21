/**
 * **strace** - strace is a diagnostic, debugging and instructional userspace utility for Linux
 *
 * @domain `strace.io`
 * @programs `strace`
 * @version `6.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install strace`
 * @aliases `strace`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.strace
 * // Or access via domain
 * const samePkg = pantry.straceio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "strace.io"
 * console.log(pkg.description) // "strace is a diagnostic, debugging and instructi..."
 * console.log(pkg.programs)    // ["strace"]
 * console.log(pkg.versions[0]) // "6.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/strace-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stracePackage = {
  /**
   * The display name of this package.
   */
  name: 'strace.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'strace.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'strace is a diagnostic, debugging and instructional userspace utility for Linux' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/strace.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install strace' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'strace',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'strace',
  ] as const,
}

export type StracePackage = typeof stracePackage
