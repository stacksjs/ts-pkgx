/**
 * **radicle.org** - Package from pantry: radicle.org
 *
 * @domain `radicle.org`
 *
 * @install `launchpad install radicle.org`
 * @dependencies `openssl.org^1.1.1`, `rust-lang.org/cargo^0`, `cmake.org^3`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.radicleorg
 * console.log(pkg.name)        // "radicle.org"
 * console.log(pkg.description) // "Package from pantry: radicle.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/radicle-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const radicleorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'radicle.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'radicle.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: radicle.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install radicle.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1.1',
    'rust-lang.org/cargo^0',
    'cmake.org^3',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/radicle.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RadicleorgPackage = typeof radicleorgPackage
