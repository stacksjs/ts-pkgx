/**
 * **crates.io/cargo-tarpaulin** - pkgx package
 *
 * @domain `crates.io/cargo/tarpaulin`
 *
 * @install `pkgx crates.io/cargo-tarpaulin`
 * @name `cargo-tarpaulin`
 * @aliases `crates.io/cargo-tarpaulin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiocargotarpaulin
 * // Or access via domain
 * const samePkg = pantry.cratesiocargotarpaulin
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cargo-tarpaulin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cargo/tarpaulin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocargotarpaulinPackage = {
  /**
   * The display name of this package.
   */
  name: 'cargo-tarpaulin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/cargo/tarpaulin' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/cargo-tarpaulin' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/cargo-tarpaulin',
  ] as const,
  fullPath: 'crates.io/cargo-tarpaulin' as const,
}

export type CratesiocargotarpaulinPackage = typeof cratesiocargotarpaulinPackage
