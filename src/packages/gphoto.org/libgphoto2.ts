/**
 * **gphoto2** - The libgphoto2 camera access and control library.
 *
 * @domain `gphoto.org/libgphoto2`
 * @programs `gphoto2-config`, `gphoto2-port-config`
 * @version `2.5.31` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gphoto.org/libgphoto2 -- $SHELL -i`
 * @name `gphoto2`
 * @aliases `libgphoto2`
 * @dependencies `libgd.github.io^2.3`, `libjpeg-turbo.org^2`, `libexif.github.io^0.6`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gphoto2
 * // Or access via domain
 * const samePkg = pantry.gphotoorglibgphoto2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gphoto2"
 * console.log(pkg.description) // "The libgphoto2 camera access and control library."
 * console.log(pkg.programs)    // ["gphoto2-config", "gphoto2-port-config"]
 * console.log(pkg.versions[0]) // "2.5.31" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gphoto-org/libgphoto2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gphoto2Package = {
  /**
   * The display name of this package.
   */
  name: 'gphoto2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gphoto.org/libgphoto2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The libgphoto2 camera access and control library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gphoto.org/libgphoto2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gphoto.org/libgphoto2 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gphoto2-config',
    'gphoto2-port-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgd.github.io^2.3',
    'libjpeg-turbo.org^2',
    'libexif.github.io^0.6',
    'gnu.org/libtool^2.4',
    'libusb.info/compat^0.1',
    'curl.se^8',
    'gnome.org/libxml2^2.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.31',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libgphoto2',
  ] as const,
  fullPath: 'gphoto.org/libgphoto2' as const,
}

export type Gphoto2Package = typeof gphoto2Package
