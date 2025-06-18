/**
 * **mun-lang.org** - Package from pantry: mun-lang.org
 *
 * @domain `mun-lang.org`
 *
 * @install `launchpad install mun-lang.org`
 * @dependencies `invisible-island.net/ncurses^6`, `sourceware.org/libffi^3`, `gnome.org/libxml2^2`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.munlangorg
 * console.log(pkg.name)        // "mun-lang.org"
 * console.log(pkg.description) // "Package from pantry: mun-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mun-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const munlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mun-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mun-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mun-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mun-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses^6',
    'sourceware.org/libffi^3',
    'gnome.org/libxml2^2',
    'rust-lang.org^1.74.1',
    'llvm.org^14 # requires this specifically',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mun-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MunlangorgPackage = typeof munlangorgPackage
