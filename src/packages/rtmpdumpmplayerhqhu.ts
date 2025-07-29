/**
 * **rtmpdump.mplayerhq.hu** - Package from pantry: rtmpdump.mplayerhq.hu
 *
 * @domain `rtmpdump.mplayerhq.hu`
 *
 * @install `launchpad install rtmpdump.mplayerhq.hu`
 * @dependencies `openssl.org^1.1`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rtmpdumpmplayerhqhu
 * console.log(pkg.name)        // "rtmpdump.mplayerhq.hu"
 * console.log(pkg.description) // "Package from pantry: rtmpdump.mplayerhq.hu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rtmpdump-mplayerhq-hu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rtmpdumpmplayerhqhuPackage = {
  /**
   * The display name of this package.
   */
  name: 'rtmpdump.mplayerhq.hu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rtmpdump.mplayerhq.hu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rtmpdump.mplayerhq.hu' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rtmpdump.mplayerhq.hu' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rtmpdump.mplayerhq.hu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rtmpdump.mplayerhq.hu' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rtmpdump.mplayerhq.hu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RtmpdumpmplayerhqhuPackage = typeof rtmpdumpmplayerhqhuPackage
