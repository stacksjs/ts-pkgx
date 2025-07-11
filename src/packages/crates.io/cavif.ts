/**
 * **cavif** - AVIF image creator in pure Rust
 *
 * @domain `crates.io/cavif`
 * @programs `cavif`
 * @version `1.5.6` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cavif`
 * @name `cavif`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cavif
 * // Or access via domain
 * const samePkg = pantry.cratesiocavif
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cavif"
 * console.log(pkg.description) // "AVIF image creator in pure Rust"
 * console.log(pkg.programs)    // ["cavif"]
 * console.log(pkg.versions[0]) // "1.5.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cavif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cavifPackage = {
  /**
   * The display name of this package.
   */
  name: 'cavif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/cavif' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'AVIF image creator in pure Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/cavif/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cavif' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cavif',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.6',
    '1.5.5',
    '1.5.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cavif -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cavif' as const,
}

export type CavifPackage = typeof cavifPackage
