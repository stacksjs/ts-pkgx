/**
 * **crates.io/bake-rs** - pkgx package
 *
 * @domain `crates.io/bake/rs`
 *
 * @install `pkgx crates.io/bake-rs`
 * @name `bake-rs`
 * @aliases `crates.io/bake-rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiobakers
 * // Or access via domain
 * const samePkg = pantry.cratesiobakers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bake-rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bake/rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobakersPackage = {
  /**
   * The display name of this package.
   */
  name: 'bake-rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bake/rs' as const,
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
  installCommand: 'pkgx crates.io/bake-rs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/bake-rs',
  ] as const,
  fullPath: 'crates.io/bake-rs' as const,
}

export type CratesiobakersPackage = typeof cratesiobakersPackage
