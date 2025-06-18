/**
 * **netpbm.sourceforge.net** - Package from pantry: netpbm.sourceforge.net
 *
 * @domain `netpbm.sourceforge.net`
 *
 * @install `launchpad install netpbm.sourceforge.net`
 * @dependencies `github.com/jasper-software/jasper`, `libjpeg-turbo.org`, `libpng.org`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.netpbmsourceforgenet
 * console.log(pkg.name)        // "netpbm.sourceforge.net"
 * console.log(pkg.description) // "Package from pantry: netpbm.sourceforge.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netpbm-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const netpbmsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'netpbm.sourceforge.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netpbm.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: netpbm.sourceforge.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install netpbm.sourceforge.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/jasper-software/jasper',
    'libjpeg-turbo.org',
    'libpng.org',
    'simplesystems.org/libtiff',
    'gnome.org/libxml2',
    'zlib.net',
    'gnu.org/make',
    'github.com/westes/flex',
    'perl.org',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/netpbm.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NetpbmsourceforgenetPackage = typeof netpbmsourceforgenetPackage
