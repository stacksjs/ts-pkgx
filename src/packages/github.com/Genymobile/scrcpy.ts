/**
 * **scrcpy** - Display and control your Android device
 *
 * @domain `github.com/Genymobile/scrcpy`
 * @programs `scrcpy`
 * @version `3.3.0` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) scrcpy`
 * @name `scrcpy`
 * @aliases `Genymobile/scrcpy`
 * @dependencies `ffmpeg.org`, `libusb.info`, `libsdl.org`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.scrcpy
 * // Or access via domain
 * const samePkg = pantry.githubcomgenymobilescrcpy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "scrcpy"
 * console.log(pkg.description) // "Display and control your Android device"
 * console.log(pkg.programs)    // ["scrcpy"]
 * console.log(pkg.versions[0]) // "3.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Genymobile/scrcpy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scrcpyPackage = {
  /**
   * The display name of this package.
   */
  name: 'scrcpy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Genymobile/scrcpy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Display and control your Android device' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Genymobile/scrcpy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) scrcpy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scrcpy',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ffmpeg.org',
    'libusb.info',
    'libsdl.org',
    'linuxwebmproject.org/libvpx<1.15.1',
    'webmproject.org/libvpx<1.15.1',
    'darwinsourceware.org/bzip2zlib.net',
    'sourceware.org/bzip2',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.0',
    '3.2.0',
    '3.1.0',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.7.0',
    '2.6.1',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '2.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'Genymobile/scrcpy',
  ] as const,
  fullPath: 'github.com/Genymobile/scrcpy' as const,
}

export type ScrcpyPackage = typeof scrcpyPackage
