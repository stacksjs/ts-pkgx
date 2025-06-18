/**
 * **strace** - strace is a diagnostic, debugging and instructional userspace utility for Linux
 *
 * @domain `strace.io`
 * @programs `strace`
 * @version `6.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) strace`
 * @name `strace`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.strace
 * // Or access via domain
 * const samePkg = pantry.straceio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "strace"
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
  name: 'strace' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) strace' as const,
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
  aliases: [] as const,
  fullPath: 'strace.io' as const,
}

export type StracePackage = typeof stracePackage
