/**
 * **safe_hashes** - pkgx package
 *
 * @domain `github.com/Cyfrin/safe-tx-hashes-util`
 * @programs `safe_hashes`
 * @version `0.1.4` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install safe_hashes`
 * @aliases `safe_hashes`
 * @dependencies `gnu.org/bash>=4`, `gnu.org/gcc/libstdcxx^14 # solc wants GLIBCXX_3.4.26`, `gnu.org/sed`
 * @companions `getfoundry.sh`, `stedolan.github.io/jq`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.safehashes
 * // Or access via domain
 * const samePkg = pantry.githubcomcyfrinsafetxhashesutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "safe-tx-hashes-util"
 * console.log(pkg.programs)    // ["safe_hashes"]
 * console.log(pkg.versions[0]) // "0.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Cyfrin/safe-tx-hashes-util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const safehashesPackage = {
  /**
   * The display name of this package.
   */
  name: 'safe-tx-hashes-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Cyfrin/safe-tx-hashes-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Cyfrin/safe-tx-hashes-util/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install safe_hashes' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'safe_hashes',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'getfoundry.sh',
    'stedolan.github.io/jq',
    'curl.se',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash>=4',
    'gnu.org/gcc/libstdcxx^14 # solc wants GLIBCXX_3.4.26',
    'gnu.org/sed',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.4',
    '0.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'safe_hashes',
  ] as const,
}

export type SafehashesPackage = typeof safehashesPackage
