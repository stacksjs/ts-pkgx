/**
 * **qrencode** - A fast and compact QR Code encoding library
 *
 * @domain `fukuchi.org/qrencode`
 * @programs `qrencode`
 * @version `4.1.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install qrencode`
 * @name `qrencode`
 * @dependencies `libpng.org`, `gnu.org/autoconf`, `gnu.org/automake`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.qrencode
 * // Or access via domain
 * const samePkg = pantry.fukuchiorgqrencode
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "qrencode"
 * console.log(pkg.description) // "A fast and compact QR Code encoding library"
 * console.log(pkg.programs)    // ["qrencode"]
 * console.log(pkg.versions[0]) // "4.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fukuchi-org/qrencode.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qrencodePackage = {
  /**
   * The display name of this package.
   */
  name: 'qrencode' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fukuchi.org/qrencode' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast and compact QR Code encoding library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fukuchi.org/qrencode/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install qrencode' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'qrencode',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/coreutils',
    'gnu.org/libtool',
    'freedesktop.org/pkg-config',
    'imagemagick.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type QrencodePackage = typeof qrencodePackage
