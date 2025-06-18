/**
 * **spin** - Spin is the open source developer tool for building and running serverless applications powered by WebAssembly.
 *
 * @domain `fermyon.com/spin`
 * @programs `spin`
 * @version `3.3.1` (8 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/fermyon-com/spin.md
 *
 * @install `sh <(curl https://pkgx.sh) spin`
 * @name `spin`
 * @companions `rust-lang.org`, `rust-lang.org/cargo`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.spin
 * // Or access via domain
 * const samePkg = pantry.fermyoncomspin
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "spin"
 * console.log(pkg.description) // "Spin is the open source developer tool for buil..."
 * console.log(pkg.programs)    // ["spin"]
 * console.log(pkg.versions[0]) // "3.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fermyon-com/spin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spinPackage = {
  /**
   * The display name of this package.
   */
  name: 'spin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fermyon.com/spin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Spin is the open source developer tool for building and running serverless applications powered by WebAssembly.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fermyon.com/spin/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) spin' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'spin',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'rust-lang.org',
    'rust-lang.org/cargo',
    'git-scm.org',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.0',
    '2.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'fermyon.com/spin' as const,
}

export type SpinPackage = typeof spinPackage
