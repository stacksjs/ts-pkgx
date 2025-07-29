/**
 * **fontconfig** - Package from pantry: freedesktop.org/fontconfig
 *
 * @domain `freedesktop.org/fontconfig`
 *
 * @install `launchpad install freedesktop.org/fontconfig`
 * @dependencies `sourceware.org/bzip2@1`, `freetype.org@2`, `zlib.net@1`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgfontconfig
 * console.log(pkg.name)        // "fontconfig"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/fontconfig"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/fontconfig.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgfontconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'fontconfig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/fontconfig' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/fontconfig' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/fontconfig' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/fontconfig -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/fontconfig' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2@1',
    'freetype.org@2',
    'zlib.net@1',
    'gnome.org/libxml2@2',
    'libexpat.github.io@2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/fontconfig/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgfontconfigPackage = typeof freedesktoporgfontconfigPackage
