/**
 * **erlang.org** - Package from pantry: erlang.org
 *
 * @domain `erlang.org`
 *
 * @install `launchpad install erlang.org`
 * @dependencies `openssl.org^1.1`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.erlangorg
 * console.log(pkg.name)        // "erlang.org"
 * console.log(pkg.description) // "Package from pantry: erlang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/erlang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const erlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'erlang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'erlang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: erlang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install erlang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +erlang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install erlang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'invisible-island.net/ncurses',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/erlang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ErlangorgPackage = typeof erlangorgPackage
