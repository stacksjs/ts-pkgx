/**
 * **subversion** - Package from pantry: apache.org/subversion
 *
 * @domain `apache.org/subversion`
 *
 * @install `launchpad install apache.org/subversion`
 * @dependencies `gnu.org/gettext^0.21`, `lz4.org^1`, `openssl.org^1.1`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgsubversion
 * console.log(pkg.name)        // "subversion"
 * console.log(pkg.description) // "Package from pantry: apache.org/subversion"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/subversion.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgsubversionPackage = {
  /**
   * The display name of this package.
   */
  name: 'subversion' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/subversion' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/subversion' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/subversion' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/subversion -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/subversion' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0.21',
    'lz4.org^1',
    'openssl.org^1.1',
    'github.com/JuliaStrings/utf8proc^2',
    'libexpat.github.io^2',
    'kerberos.org^1.20',
    'sqlite.org^3',
    'zlib.net^1.2',
    'apache.org/apr^1',
    'apache.org/apr-util^1',
    'apache.org/serf^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/subversion/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgsubversionPackage = typeof apacheorgsubversionPackage
