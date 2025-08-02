/**
 * **vorbis** - Package from pantry: xiph.org/vorbis
 *
 * @domain `xiph.org/vorbis`
 *
 * @install `launchpad install xiph.org/vorbis`
 * @dependencies `xiph.org/ogg^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xiphorgvorbis
 * console.log(pkg.name)        // "vorbis"
 * console.log(pkg.description) // "Package from pantry: xiph.org/vorbis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org/vorbis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiphorgvorbisPackage = {
  /**
   * The display name of this package.
   */
  name: 'vorbis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org/vorbis' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xiph.org/vorbis' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xiph.org/vorbis' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +xiph.org/vorbis -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xiph.org/vorbis' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xiph.org/vorbis/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XiphorgvorbisPackage = typeof xiphorgvorbisPackage
