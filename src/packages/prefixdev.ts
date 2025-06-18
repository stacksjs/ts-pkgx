/**
 * **prefix.dev** - Package from pantry: prefix.dev
 *
 * @domain `prefix.dev`
 *
 * @install `launchpad install prefix.dev`
 * @dependencies `openssl.org^1.1`, `libgit2.org~1.7 # links to libgit2.so.1.7`, `rust-lang.org>=1.60`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prefixdev
 * console.log(pkg.name)        // "prefix.dev"
 * console.log(pkg.description) // "Package from pantry: prefix.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prefix-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prefixdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'prefix.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prefix.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: prefix.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install prefix.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
    'rust-lang.org>=1.60',
    'rust-lang.org/cargo',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/prefix.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PrefixdevPackage = typeof prefixdevPackage
