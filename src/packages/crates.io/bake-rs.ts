/**
 * **bake** - Simple and easy to use "script runner" written in Rust.
 *
 * @domain `crates.io/bake-rs`
 * @programs `bake`
 * @version `1.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bake`
 * @name `bake`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bake
 * // Or access via domain
 * const samePkg = pantry.cratesiobakers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bake"
 * console.log(pkg.description) // "Simple and easy to use "script runner" written ..."
 * console.log(pkg.programs)    // ["bake"]
 * console.log(pkg.versions[0]) // "1.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bake-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bakePackage = {
  /**
   * The display name of this package.
   */
  name: 'bake' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bake-rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple and easy to use "script runner" written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bake-rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bake' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bake',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) bake -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bake' as const,
}

export type BakePackage = typeof bakePackage
