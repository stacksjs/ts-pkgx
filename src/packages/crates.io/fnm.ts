/**
 * **fnm** - 🚀 Fast and simple Node.js version manager, built in Rust
 *
 * @domain `crates.io/fnm`
 * @programs `fnm`
 * @version `1.38.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fnm`
 * @name `fnm`
 * @dependencies `darwin:zlib.net^1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fnm
 * // Or access via domain
 * const samePkg = pantry.cratesiofnm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fnm"
 * console.log(pkg.description) // "🚀 Fast and simple Node.js version manager, bui..."
 * console.log(pkg.programs)    // ["fnm"]
 * console.log(pkg.versions[0]) // "1.38.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fnm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fnmPackage = {
  /**
   * The display name of this package.
   */
  name: 'fnm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fnm' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🚀 Fast and simple Node.js version manager, built in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fnm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fnm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fnm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.38.1',
    '1.38.0',
    '1.37.2',
    '1.37.1',
    '1.37.0',
    '1.36.0',
    '1.35.1',
    '1.35.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type FnmPackage = typeof fnmPackage
