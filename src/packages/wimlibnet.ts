/**
 * **wimlib.net** - Package from pantry: wimlib.net
 *
 * @domain `wimlib.net`
 *
 * @install `launchpad install wimlib.net`
 * @dependencies `openssl.org^3.1.0`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wimlibnet
 * console.log(pkg.name)        // "wimlib.net"
 * console.log(pkg.description) // "Package from pantry: wimlib.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wimlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wimlibnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'wimlib.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wimlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wimlib.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wimlib.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^3.1.0',
    'gnome.org/libxml2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wimlib.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WimlibnetPackage = typeof wimlibnetPackage
