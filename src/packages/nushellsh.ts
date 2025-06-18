/**
 * **nushell.sh** - Package from pantry: nushell.sh
 *
 * @domain `nushell.sh`
 *
 * @install `launchpad install nushell.sh`
 * @dependencies `openssl.org^1`, `rust-lang.org^1.60.0`, `rust-lang.org/cargo^0.87`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nushellsh
 * console.log(pkg.name)        // "nushell.sh"
 * console.log(pkg.description) // "Package from pantry: nushell.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nushell-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nushellshPackage = {
  /**
   * The display name of this package.
   */
  name: 'nushell.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nushell.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nushell.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install nushell.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
    'rust-lang.org^1.60.0',
    'rust-lang.org/cargo^0.87',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nushell.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NushellshPackage = typeof nushellshPackage
