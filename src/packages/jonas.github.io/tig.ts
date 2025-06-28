/**
 * **tig** - Package from pantry: jonas.github.io/tig
 *
 * @domain `jonas.github.io/tig`
 *
 * @install `launchpad install jonas.github.io/tig`
 * @dependencies `gnu.org/libiconv^1`, `invisible-island.net/ncurses^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jonasgithubiotig
 * console.log(pkg.name)        // "tig"
 * console.log(pkg.description) // "Package from pantry: jonas.github.io/tig"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jonas-github-io/tig.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jonasgithubiotigPackage = {
  /**
   * The display name of this package.
   */
  name: 'tig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jonas.github.io/tig' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jonas.github.io/tig' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jonas.github.io/tig' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jonas.github.io/tig -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jonas.github.io/tig' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libiconv^1',
    'invisible-island.net/ncurses^6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jonas.github.io/tig/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JonasgithubiotigPackage = typeof jonasgithubiotigPackage
