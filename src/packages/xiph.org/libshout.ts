/**
 * **libshout** - Package from pantry: xiph.org/libshout
 *
 * @domain `xiph.org/libshout`
 *
 * @install `launchpad install xiph.org/libshout`
 * @dependencies `xiph.org/ogg`, `xiph.org/vorbis`, `openssl.org~1`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xiphorglibshout
 * console.log(pkg.name)        // "libshout"
 * console.log(pkg.description) // "Package from pantry: xiph.org/libshout"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org/libshout.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiphorglibshoutPackage = {
  /**
   * The display name of this package.
   */
  name: 'libshout' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org/libshout' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xiph.org/libshout' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xiph.org/libshout' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +xiph.org/libshout -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xiph.org/libshout' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg',
    'xiph.org/vorbis',
    'openssl.org~1',
    'speex.org',
    'theora.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xiph.org/libshout/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XiphorglibshoutPackage = typeof xiphorglibshoutPackage
