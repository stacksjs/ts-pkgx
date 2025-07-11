/**
 * **bitcoin** - Decentralized, peer to peer payment network
 *
 * @domain `bitcoin.org`
 * @programs `bitcoin-cli`, `bitcoin-tx`, `bitcoin-util`, `bitcoin-wallet`, `bitcoind`
 * @version `29.0.0` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bitcoin`
 * @name `bitcoin`
 * @dependencies `oracle.com/berkeley-db^18`, `boost.org^1`, `libevent.org^2`, ... (+3 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bitcoin
 * // Or access via domain
 * const samePkg = pantry.bitcoinorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bitcoin"
 * console.log(pkg.description) // "Decentralized, peer to peer payment network"
 * console.log(pkg.programs)    // ["bitcoin-cli", "bitcoin-tx", ...]
 * console.log(pkg.versions[0]) // "29.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bitcoin-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bitcoinPackage = {
  /**
   * The display name of this package.
   */
  name: 'bitcoin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bitcoin.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Decentralized, peer to peer payment network' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bitcoin.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bitcoin' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bitcoin-cli',
    'bitcoin-tx',
    'bitcoin-util',
    'bitcoin-wallet',
    'bitcoind',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '29.0.0',
    '28.2.0',
    '28.1.0',
    '28.0.0',
    '27.2.0',
    '27.1.0',
    '27.0.0',
    '26.2.0',
    '26.1.0',
    '26.0.0',
    '25.2.0',
    '25.1.0',
    '25.0.0',
    '24.2.0',
    '24.1.0',
    '24.0.1',
    '23.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bitcoin.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bitcoin' as const,
}

export type BitcoinPackage = typeof bitcoinPackage
