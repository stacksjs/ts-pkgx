/**
 * **fna-xna.github.io** - Package from pantry: fna-xna.github.io
 *
 * @domain `fna-xna.github.io`
 *
 * @install `launchpad install fna-xna.github.io`
 * @dependencies `libsdl.org^2.28`, `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fnaxnagithubio
 * console.log(pkg.name)        // "fna-xna.github.io"
 * console.log(pkg.description) // "Package from pantry: fna-xna.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fna-xna-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fnaxnagithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'fna-xna.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fna-xna.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fna-xna.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install fna-xna.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libsdl.org^2.28',
    'cmake.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fna-xna.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FnaxnagithubioPackage = typeof fnaxnagithubioPackage
