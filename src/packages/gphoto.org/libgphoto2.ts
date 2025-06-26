/**
 * **libgphoto2** - Package from pantry: gphoto.org/libgphoto2
 *
 * @domain `gphoto.org/libgphoto2`
 *
 * @install `launchpad install gphoto.org/libgphoto2`
 * @dependencies `libgd.github.io^2.3`, `libjpeg-turbo.org^2`, `libexif.github.io^0.6`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gphotoorglibgphoto2
 * console.log(pkg.name)        // "libgphoto2"
 * console.log(pkg.description) // "Package from pantry: gphoto.org/libgphoto2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gphoto-org/libgphoto2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gphotoorglibgphoto2Package = {
  /**
   * The display name of this package.
   */
  name: 'libgphoto2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gphoto.org/libgphoto2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gphoto.org/libgphoto2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gphoto.org/libgphoto2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gphoto.org/libgphoto2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gphoto.org/libgphoto2' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gphoto.org/libgphoto2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gphotoorglibgphoto2Package = typeof gphotoorglibgphoto2Package
