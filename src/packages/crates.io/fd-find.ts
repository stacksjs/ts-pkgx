/**
 * **fd** - A simple, fast and user-friendly alternative to 'find'
 *
 * @domain `crates.io/fd-find`
 * @programs `fd`
 * @version `10.2.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fd`
 * @aliases `fd`
 * @dependencies `rust-lang.org>=1.60`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fd
 * // Or access via domain
 * const samePkg = pantry.cratesiofdfind
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fd-find"
 * console.log(pkg.description) // "A simple, fast and user-friendly alternative to..."
 * console.log(pkg.programs)    // ["fd"]
 * console.log(pkg.versions[0]) // "10.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fd-find.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fdPackage = {
  /**
   * The display name of this package.
   */
  name: 'fd-find' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fd-find' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple, fast and user-friendly alternative to \'find\'' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fd-find/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install fd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.60',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '10.2.0',
    '10.1.0',
    '10.0.0',
    '9.0.0',
    '8.7.1',
    '8.7.0',
    '8.6.0',
    '8.5.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fd',
  ] as const,
}

export type FdPackage = typeof fdPackage
