/**
 * **php.net** - Package from pantry: php.net
 *
 * @domain `php.net`
 *
 * @install `launchpad install php.net`
 * @dependencies `gnu.org/bison^3`, `re2c.org^3`, `apache.org/apr^1`, ... (+27 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.phpnet
 * console.log(pkg.name)        // "php.net"
 * console.log(pkg.description) // "Package from pantry: php.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/php-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const phpnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'php.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'php.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: php.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install php.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnu.org/bison^3',
    're2c.org^3',
    'apache.org/apr^1',
    'apache.org/apr-util^1',
    'bcrypt.sourceforge.net^1',
    'gnu.org/autoconf^2',
    'curl.se^8',
    'gnu.org/gettext^0',
    'gnu.org/gmp^6',
    'libsodium.org<1.0.19',
    'libzip.org~1.9',
    'github.com/kkos/oniguruma^6',
    'openssl.org',
    'pcre.org/v2>=10.30',
    'sqlite.org^3',
    'unicode.org^71',
    'gnu.org/libiconv^1',
    'kerberos.org^1',
    'gnome.org/libxml2',
    'thrysoee.dk/editline^3',
    'sourceware.org/libffi>=3.4.7',
    'gnome.org/libxslt>=1.1.0<1.1.43',
    'libpng.org^1',
    'google.com/webp^1',
    'ijg.org^9',
    'gnu.org/sed^4 # phpize requires this',
    'openldap.org^2 # since 8.1.31, 8.2.26, 8.3.14, 8.4.0',
    'gnu.org/gcc/libstdcxx@14',
    'darwin:sourceware.org/bzip2^1',
    'darwin:zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/php.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PhpnetPackage = typeof phpnetPackage
