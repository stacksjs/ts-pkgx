/**
 * **crystal-lang.org** - Package from pantry: crystal-lang.org
 *
 * @domain `crystal-lang.org`
 *
 * @install `launchpad install crystal-lang.org`
 * @dependencies `hboehm.info/gc^8`, `gnu.org/gmp^6`, `libevent.org^2`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.crystallangorg
 * console.log(pkg.name)        // "crystal-lang.org"
 * console.log(pkg.description) // "Package from pantry: crystal-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crystal-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const crystallangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'crystal-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crystal-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crystal-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crystal-lang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crystal-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crystal-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hboehm.info/gc^8',
    'gnu.org/gmp^6',
    'libevent.org^2',
    'pyyaml.org/libyaml^0',
    'llvm.org<17',
    'openssl.org^1.1',
    'pcre.org/v2^10',
    'freedesktop.org/pkg-config^0',
    'sourceware.org/libffi^3',
    'invisible-island.net/ncurses^6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crystal-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CrystallangorgPackage = typeof crystallangorgPackage
