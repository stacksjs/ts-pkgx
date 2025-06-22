/**
 * **cargo-tarpaulin** - A code coverage tool for Rust projects
 *
 * @domain `crates.io/cargo-tarpaulin`
 * @programs `cargo-tarpaulin`
 * @version `0.32.7` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cargo-tarpaulin`
 * @name `cargo-tarpaulin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cargotarpaulin
 * // Or access via domain
 * const samePkg = pantry.cratesiocargotarpaulin
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cargo-tarpaulin"
 * console.log(pkg.description) // "A code coverage tool for Rust projects"
 * console.log(pkg.programs)    // ["cargo-tarpaulin"]
 * console.log(pkg.versions[0]) // "0.32.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cargo-tarpaulin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cargotarpaulinPackage = {
  /**
   * The display name of this package.
   */
  name: 'cargo-tarpaulin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/cargo-tarpaulin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A code coverage tool for Rust projects' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/cargo-tarpaulin/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cargo-tarpaulin' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cargo-tarpaulin',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.32.7',
    '0.32.6',
    '0.32.5',
    '0.32.4',
    '0.32.3',
    '0.32.2',
    '0.32.1',
    '0.32.0',
    '0.31.5',
    '0.31.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cargo-tarpaulin -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cargo-tarpaulin' as const,
}

export type CargotarpaulinPackage = typeof cargotarpaulinPackage
