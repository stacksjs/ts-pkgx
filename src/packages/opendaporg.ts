/**
 * **opendap.org** - A new version of libdap that contains both DAP2 and DAP4 support
 *
 * @domain `opendap.org`
 * @programs `dap-config`, `dap-config-pkgconfig`, `getdap`, `getdap4`
 * @version `3.21.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +opendap.org -- $SHELL -i`
 * @dependencies `gnome.org/libxml2`, `openssl.org`, `curl.se`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +opendap.org -- $SHELL -i' as const,
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnome.org/libxml2',
    'openssl.org',
    'curl.se',
    'linux:sourceforge.net/libtirpc',
    'linux:github.com/util-linux/util-linux',
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
}

export type OpendaporgPackage = typeof opendaporgPackage
