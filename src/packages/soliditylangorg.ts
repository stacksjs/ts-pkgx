/**
 * **soliditylang.org** - Solidity, the Smart Contract Programming Language
 *
 * @domain `soliditylang.org`
 * @programs `solc`, `yul-phaser`
 * @version `0.8.30` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install soliditylang.org`
 * @dependencies `boost.org~1.84`, `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.soliditylangorg
 * console.log(pkg.name)        // "soliditylang.org"
 * console.log(pkg.description) // "Solidity, the Smart Contract Programming Language"
 * console.log(pkg.programs)    // ["solc", "yul-phaser"]
 * console.log(pkg.versions[0]) // "0.8.30" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soliditylang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soliditylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'soliditylang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soliditylang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Solidity, the Smart Contract Programming Language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/soliditylang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install soliditylang.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'solc',
    'yul-phaser',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'boost.org~1.84',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.30',
    '0.8.29',
    '0.8.28',
    '0.8.27',
    '0.8.26',
    '0.8.25',
    '0.8.24',
    '0.8.23',
    '0.8.22',
    '0.8.21',
    '0.8.20',
    '0.8.19',
    '0.8.18',
    '0.8.17',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +soliditylang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install soliditylang.org' as const,
}

export type SoliditylangorgPackage = typeof soliditylangorgPackage
