/**
 * **cpz** - Modern, performance focused unix commands
 *
 * @domain `crates.io/cpz`
 * @programs `cpz`
 * @version `3.1.0` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cpz.md
 *
 * @install `sh <(curl https://pkgx.sh) cpz`
 * @name `cpz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cpz
 * // Or access via domain
 * const samePkg = pantry.cratesiocpz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cpz"
 * console.log(pkg.description) // "Modern, performance focused unix commands"
 * console.log(pkg.programs)    // ["cpz"]
 * console.log(pkg.versions[0]) // "3.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cpz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cpzPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/cpz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Modern, performance focused unix commands' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/cpz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cpz' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cpz',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.0',
    '3.0.1',
    '3.0.0',
    '2.2.0',
    '2.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/cpz' as const,
}

export type CpzPackage = typeof cpzPackage
