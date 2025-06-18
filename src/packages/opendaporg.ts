/**
 * **opendap.org** - Package from pantry: opendap.org
 *
 * @domain `opendap.org`
 *
 * @install `launchpad install opendap.org`
 * @dependencies `gnome.org/libxml2`, `openssl.org`, `curl.se`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opendaporg
 * console.log(pkg.name)        // "opendap.org"
 * console.log(pkg.description) // "Package from pantry: opendap.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opendaporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opendap.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendap.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: opendap.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install opendap.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
    'openssl.org',
    'curl.se',
    'sourceforge.net/libtirpc',
    'github.com/util-linux/util-linux',
    'gnu.org/bison',
    'freedesktop.org/pkg-config',
    'github.com/westes/flex',
    'gnu.org/patch',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/libtool',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpendaporgPackage = typeof opendaporgPackage
