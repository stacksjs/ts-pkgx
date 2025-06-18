/**
 * **romanz/trezor-agent** - Hardware-based SSH/GPG/age agent
 *
 * @domain `github.com/romanz/trezor-agent`
 * @programs `jade-agent`, `jade-gpg`, `jade-gpg-agent`, `keepkey-agent`, `keepkeyctl`, ... (+12 more)
 * @version `0.15.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/romanz/trezor-agent -- $SHELL -i`
 * @aliases `romanz/trezor-agent`
 * @dependencies `python.org~3.12`, `libusb.info^1`, `darwinlibpng.org~1.6`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.romanztrezoragent
 * // Or access via domain
 * const samePkg = pantry.githubcomromanztrezoragent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/romanz/trezor-agent"
 * console.log(pkg.description) // "Hardware-based SSH/GPG/age agent"
 * console.log(pkg.programs)    // ["jade-agent", "jade-gpg", ...]
 * console.log(pkg.versions[0]) // "0.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/romanz/trezor-agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const romanztrezoragentPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/romanz/trezor-agent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/romanz/trezor-agent' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Hardware-based SSH/GPG/age agent' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/romanz/trezor-agent/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/romanz/trezor-agent -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jade-agent',
    'jade-gpg',
    'jade-gpg-agent',
    'keepkey-agent',
    'keepkeyctl',
    'ledger-agent',
    'ledger-gpg',
    'ledger-gpg-agent',
    'onlykey-agent',
    'onlykey-cli',
    'onlykey-gpg',
    'onlykey-gpg-agent',
    'trezor-agent',
    'trezor-gpg',
    'trezor-gpg-agent',
    'trezor-signify',
    'trezorctl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
    'libusb.info^1',
    'darwinlibpng.org~1.6',
    'libpng.org~1.6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.0',
    '0.14.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'romanz/trezor-agent',
  ] as const,
  fullPath: 'github.com/romanz/trezor-agent' as const,
}

export type RomanztrezoragentPackage = typeof romanztrezoragentPackage
