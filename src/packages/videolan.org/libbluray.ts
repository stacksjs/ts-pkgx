/**
 * **libbluray** - Package from pantry: videolan.org/libbluray
 *
 * @domain `videolan.org/libbluray`
 *
 * @install `launchpad install videolan.org/libbluray`
 * @dependencies `freedesktop.org/fontconfig`, `freetype.org`, `darwin:gnome.org/libxml2` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.videolanorglibbluray
 * console.log(pkg.name)        // "libbluray"
 * console.log(pkg.description) // "Package from pantry: videolan.org/libbluray"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/libbluray.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const videolanorglibblurayPackage = {
  /**
   * The display name of this package.
   */
  name: 'libbluray' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'videolan.org/libbluray' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: videolan.org/libbluray' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install videolan.org/libbluray' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +videolan.org/libbluray -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install videolan.org/libbluray' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'freedesktop.org/fontconfig',
    'freetype.org',
    'darwin:gnome.org/libxml2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/libbluray/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VideolanorglibblurayPackage = typeof videolanorglibblurayPackage
