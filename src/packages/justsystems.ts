/**
 * **just.systems** - Package from pantry: just.systems
 *
 * @domain `just.systems`
 *
 * @install `launchpad install just.systems`
 * @dependencies `rust-lang.org^1.47.0`, `rust-lang.org/cargo^0.75`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.justsystems
 * console.log(pkg.name)        // "just.systems"
 * console.log(pkg.description) // "Package from pantry: just.systems"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/just-systems.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const justsystemsPackage = {
  /**
   * The display name of this package.
   */
  name: 'just.systems' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'just.systems' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: just.systems' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install just.systems' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.47.0',
    'rust-lang.org/cargo^0.75',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/just.systems/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JustsystemsPackage = typeof justsystemsPackage
