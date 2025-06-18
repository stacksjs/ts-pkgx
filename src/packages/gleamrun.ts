/**
 * **gleam.run** - Package from pantry: gleam.run
 *
 * @domain `gleam.run`
 *
 * @install `launchpad install gleam.run`
 * @dependencies `rust-lang.org>=1.85`, `rust-lang.org/cargo>=0.86`, `erlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gleamrun
 * console.log(pkg.name)        // "gleam.run"
 * console.log(pkg.description) // "Package from pantry: gleam.run"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gleam-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gleamrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'gleam.run' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gleam.run' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gleam.run' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gleam.run' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.85',
    'rust-lang.org/cargo>=0.86',
    'erlang.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gleam.run/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GleamrunPackage = typeof gleamrunPackage
