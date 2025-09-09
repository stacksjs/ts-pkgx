/**
 * **gnupg.org** - pkgx package
 *
 * @domain `gnupg.org`
 * @version `v2.5` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnupg.org`
 * @dependencies `zlib.net^1.1`, `sourceware.org/bzip2`, `gnupg.org/npth`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorg
 * console.log(pkg.name)        // "gnupg.org"
 * console.log(pkg.versions[0]) // "v2.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnupg.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org' as const,
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
  installCommand: 'launchpad install gnupg.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1.1',
    'sourceware.org/bzip2',
    'gnupg.org/npth',
    'gnupg.org/libgpg-error',
    'gnupg.org/libksba',
    'gnupg.org/libassuan@2',
    'gnupg.org/libgcrypt',
    'gnupg.org/pinentry',
    'gnutls.org^3',
    'openldap.org^2',
    'gnu.org/readline^8',
    'sqlite.org^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    'v2.5',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org' as const,
}

export type GnupgorgPackage = typeof gnupgorgPackage
