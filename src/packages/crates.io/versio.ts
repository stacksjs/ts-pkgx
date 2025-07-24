/**
 * **versio** - pkgx package
 *
 * @domain `crates.io/versio`
 *
 * @install `launchpad install crates.io/versio`
 * @dependencies `openssl.org^1.1`, `gnupg.org/libgpg-error@1`, `gnupg.org/gpgme^1.13`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioversio
 * console.log(pkg.name)        // "versio"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/versio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioversioPackage = {
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/versio' as const,
  programs: [] as const,
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
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/versio -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/versio' as const,
}

export type CratesioversioPackage = typeof cratesioversioPackage
