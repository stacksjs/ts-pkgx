/**
 * **dua** - View disk space usage and delete unwanted data, fast.
 *
 * @domain `crates.io/dua`
 * @programs `dua`
 * @version `2.30.1` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dua`
 * @name `dua`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dua
 * // Or access via domain
 * const samePkg = pantry.cratesiodua
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dua"
 * console.log(pkg.description) // "View disk space usage and delete unwanted data,..."
 * console.log(pkg.programs)    // ["dua"]
 * console.log(pkg.versions[0]) // "2.30.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/dua.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duaPackage = {
  /**
   * The display name of this package.
   */
  name: 'dua' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/dua' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'View disk space usage and delete unwanted data, fast.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/dua/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dua' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dua',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.30.1',
    '2.30.0',
    '2.29.4',
    '2.29.3',
    '2.29.2',
    '2.29.1',
    '2.29.0',
    '2.28.0',
    '2.27.2',
    '2.27.1',
    '2.27.0',
    '2.26.0',
    '2.25.0',
    '2.24.2',
    '2.24.1',
    '2.24.0',
    '2.23.0',
    '2.22.0',
    '2.21.0',
    '2.20.3',
    '2.20.2',
    '2.20.1',
    '2.20.0',
    '2.19.2',
    '2.19.1',
    '2.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type DuaPackage = typeof duaPackage
