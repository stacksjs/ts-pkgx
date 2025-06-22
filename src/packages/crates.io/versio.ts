/**
 * **versio** - A version number manager
 *
 * @domain `crates.io/versio`
 * @programs `versio`
 * @version `0.8.5` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install versio`
 * @name `versio`
 * @dependencies `openssl.org^1.1`, `gnupg.org/libgpg-error@1`, `gnupg.org/gpgme^1.13`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.versio
 * // Or access via domain
 * const samePkg = pantry.cratesioversio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "versio"
 * console.log(pkg.description) // "A version number manager"
 * console.log(pkg.programs)    // ["versio"]
 * console.log(pkg.versions[0]) // "0.8.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/versio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const versioPackage = {
  /**
   * The display name of this package.
   */
  name: 'versio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/versio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A version number manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/versio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install versio' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'versio',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'gnupg.org/libgpg-error@1',
    'gnupg.org/gpgme^1.13',
    'gnupg.org/libassuan',
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.5',
    '0.8.3',
    '0.7.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) versio -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install versio' as const,
}

export type VersioPackage = typeof versioPackage
