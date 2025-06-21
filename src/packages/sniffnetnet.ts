/**
 * **sniffnet.net** - Package from pantry: sniffnet.net
 *
 * @domain `sniffnet.net`
 *
 * @install `launchpad install sniffnet.net`
 * @dependencies `openssl.org@1`, `tcpdump.org@1`, `linux:alsa-project.org/alsa-lib@1`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sniffnetnet
 * console.log(pkg.name)        // "sniffnet.net"
 * console.log(pkg.description) // "Package from pantry: sniffnet.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sniffnet-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sniffnetnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'sniffnet.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sniffnet.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sniffnet.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sniffnet.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org@1',
    'tcpdump.org@1',
    'linux:alsa-project.org/alsa-lib@1',
    'linux:freedesktop.org/fontconfig@2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sniffnet.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SniffnetnetPackage = typeof sniffnetnetPackage
