/**
 * **trippy.cli.rs** - Package from pantry: trippy.cli.rs
 *
 * @domain `trippy.cli.rs`
 *
 * @install `launchpad install trippy.cli.rs`
 * @dependencies `rust-lang.org^1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.trippyclirs
 * console.log(pkg.name)        // "trippy.cli.rs"
 * console.log(pkg.description) // "Package from pantry: trippy.cli.rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/trippy-cli-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trippyclirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'trippy.cli.rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'trippy.cli.rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: trippy.cli.rs' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install trippy.cli.rs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.65',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/trippy.cli.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TrippyclirsPackage = typeof trippyclirsPackage
