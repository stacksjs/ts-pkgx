/**
 * **opendap.org** - A new version of libdap that contains both DAP2 and DAP4 support
 *
 * @domain `opendap.org`
 * @programs `dap-config`, `dap-config-pkgconfig`, `getdap`, `getdap4`
 * @version `3.21.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +opendap.org -- $SHELL -i`
 * @dependencies `gnome.org/libxml2`, `openssl.org`, `curl.se`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opendaporg
 * console.log(pkg.name)        // "opendap.org"
 * console.log(pkg.description) // "A new version of libdap that contains both DAP2..."
 * console.log(pkg.programs)    // ["dap-config", "dap-config-pkgconfig", ...]
 * console.log(pkg.versions[0]) // "3.21.1" (latest)
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
  description: 'A new version of libdap that contains both DAP2 and DAP4 support' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +opendap.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dap-config',
    'dap-config-pkgconfig',
    'getdap',
    'getdap4',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
    'openssl.org',
    'curl.se',
    'linuxsourceforge.net/libtirpcgithub.com/util-linux/util-linux',
    'sourceforge.net/libtirpc',
    'github.com/util-linux/util-linux',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.21.1',
    '3.20.11',
  ] as const,
  aliases: [] as const,
  fullPath: 'opendap.org' as const,
}

export type OpendaporgPackage = typeof opendaporgPackage
