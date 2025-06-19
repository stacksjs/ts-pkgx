/**
 * **svn** - Version control system designed to be a better CVS
 *
 * @domain `apache.org/subversion`
 * @programs `svn`, `svnadmin`, `svnbench`, `svndumpfilter`, `svnfsfs`, ... (+6 more)
 * @version `1.14.5` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +apache.org/subversion -- $SHELL -i`
 * @aliases `svn`
 * @dependencies `gnu.org/gettext^0.21`, `lz4.org^1`, `openssl.org^1.1`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.svn
 * // Or access via domain
 * const samePkg = pantry.apacheorgsubversion
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "subversion"
 * console.log(pkg.description) // "Version control system designed to be a better CVS"
 * console.log(pkg.programs)    // ["svn", "svnadmin", ...]
 * console.log(pkg.versions[0]) // "1.14.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/subversion.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const svnPackage = {
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
  description: 'Version control system designed to be a better CVS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/subversion/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +apache.org/subversion -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'svn',
    'svnadmin',
    'svnbench',
    'svndumpfilter',
    'svnfsfs',
    'svnlook',
    'svnmucc',
    'svnrdump',
    'svnserve',
    'svnsync',
    'svnversion',
  ] as const,
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
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.5',
    '1.14.4',
    '1.14.3',
    '1.14.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'svn',
  ] as const,
}

export type SvnPackage = typeof svnPackage
