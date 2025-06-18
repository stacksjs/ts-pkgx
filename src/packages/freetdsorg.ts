/**
 * **freetds.org** - Package from pantry: freetds.org
 *
 * @domain `freetds.org`
 *
 * @install `launchpad install freetds.org`
 * @dependencies `openssl.org^1.1`, `unixodbc.org`, `kerberos.org`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freetdsorg
 * console.log(pkg.name)        // "freetds.org"
 * console.log(pkg.description) // "Package from pantry: freetds.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freetds-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freetdsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'freetds.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freetds.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freetds.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install freetds.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'unixodbc.org',
    'kerberos.org',
    'gnu.org/readline',
    'gnu.org/autoconf',
    'gnu.org/gettext',
    'gnu.org/libtool',
    'freedesktop.org/pkg-config',
    'gnu.org/automake',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freetds.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreetdsorgPackage = typeof freetdsorgPackage
