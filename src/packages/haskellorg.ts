/**
 * **haskell.org** - Package from pantry: haskell.org
 *
 * @domain `haskell.org`
 *
 * @install `launchpad install haskell.org`
 * @dependencies `gnu.org/gmp^6`, `invisible-island.net/ncurses^6`, `sourceware.org/libffi^3`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.haskellorg
 * console.log(pkg.name)        // "haskell.org"
 * console.log(pkg.description) // "Package from pantry: haskell.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/haskell-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const haskellorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'haskell.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'haskell.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: haskell.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install haskell.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gmp^6',
    'invisible-island.net/ncurses^6',
    'sourceware.org/libffi^3',
    'github.com/numactl/numactl^2',
    'gnu.org/gcc',
    'curl.se',
    'gnu.org/make',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HaskellorgPackage = typeof haskellorgPackage
