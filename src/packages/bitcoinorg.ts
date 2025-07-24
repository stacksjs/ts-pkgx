/**
 * **bitcoin.org** - Package from pantry: bitcoin.org
 *
 * @domain `bitcoin.org`
 *
 * @install `launchpad install bitcoin.org`
 * @dependencies `oracle.com/berkeley-db^18`, `boost.org^1`, `libevent.org^2`, ... (+3 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bitcoinorg
 * console.log(pkg.name)        // "bitcoin.org"
 * console.log(pkg.description) // "Package from pantry: bitcoin.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bitcoin-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bitcoinorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'bitcoin.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bitcoin.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bitcoin.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bitcoin.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bitcoin.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bitcoin.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'oracle.com/berkeley-db^18',
    'boost.org^1',
    'libevent.org^2',
    'zeromq.org^4',
    'sqlite.org^3',
    'linux:gnu.org/gcc/libstdcxx',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bitcoin.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BitcoinorgPackage = typeof bitcoinorgPackage
