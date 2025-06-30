/**
 * **opendap.org** - Package from pantry: opendap.org
 *
 * @domain `opendap.org`
 *
 * @install `launchpad install opendap.org`
 * @dependencies `gnome.org/libxml2`, `openssl.org`, `curl.se`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install opendap.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +opendap.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install opendap.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpendaporgPackage = typeof opendaporgPackage
