/**
 * **dhall-lang.org** - Package from pantry: dhall-lang.org
 *
 * @domain `dhall-lang.org`
 *
 * @install `launchpad install dhall-lang.org`
 * @dependencies `invisible-island.net/ncurses^6.4`, `zlib.net^1.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dhalllangorg
 * console.log(pkg.name)        // "dhall-lang.org"
 * console.log(pkg.description) // "Package from pantry: dhall-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dhall-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dhalllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'dhall-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dhall-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dhall-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dhall-lang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dhall-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dhall-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses^6.4',
    'zlib.net^1.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dhall-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DhalllangorgPackage = typeof dhalllangorgPackage
