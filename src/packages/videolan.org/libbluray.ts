/**
 * **videolan.org/libbluray** - pkgx package
 *
 * @domain `videolan.org/libbluray`
 * @version `1.4.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install videolan.org/libbluray`
 * @dependencies `freedesktop.org/fontconfig`, `freetype.org`, `gnome.org/libxml2~2.13 # API changed in 2.14`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.videolanorglibbluray
 * console.log(pkg.name)        // "videolan.org/libbluray"
 * console.log(pkg.versions[0]) // "1.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/libbluray.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const videolanorglibblurayPackage = {
  /**
   * The display name of this package.
   */
  name: 'videolan.org/libbluray' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'videolan.org/libbluray' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/libbluray/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install videolan.org/libbluray' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/fontconfig',
    'freetype.org',
    'gnome.org/libxml2~2.13 # API changed in 2.14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.0',
    '1.3.4',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +videolan.org/libbluray -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install videolan.org/libbluray' as const,
}

export type VideolanorglibblurayPackage = typeof videolanorglibblurayPackage
