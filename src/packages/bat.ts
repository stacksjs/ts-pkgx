/**
 * **bat** - Clone of cat(1) with syntax highlighting and Git integration
 *
 * @domain `crates.io/bat`
 * @programs `bat`
 * @version `0.25.0` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bat.md
 *
 * @install `sh <(curl https://pkgx.sh) bat`
 * @name `bat`
 * @dependencies `zlib.net^1`, `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bat
 * // Or access via domain
 * const samePkg = pantry.cratesiobat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bat"
 * console.log(pkg.description) // "Clone of cat(1) with syntax highlighting and Gi..."
 * console.log(pkg.programs)    // ["bat"]
 * console.log(pkg.versions[0]) // "0.25.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const batPackage = {
  /**
   * The display name of this package.
   */
  name: 'bat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Clone of cat(1) with syntax highlighting and Git integration' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) bat' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bat',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/bat' as const,
}

export type BatPackage = typeof batPackage
