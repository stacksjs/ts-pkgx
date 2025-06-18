/**
 * **pcscd** - pkgx package
 *
 * @domain `pcsclite.apdu.fr`
 * @programs `pcscd`
 * @version `2.3.3` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pcscd`
 * @aliases `pcscd`, `pcsc-lite`
 * @dependencies `libusb.info^1`, `systemd.io^254 # libudev`, `cmake.org^3`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pcscd
 * // Or access via domain
 * const samePkg = pantry.pcscliteapdufr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pcsclite.apdu.fr"
 * console.log(pkg.programs)    // ["pcscd"]
 * console.log(pkg.versions[0]) // "2.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcsclite-apdu-fr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcscdPackage = {
  /**
   * The display name of this package.
   */
  name: 'pcsclite.apdu.fr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pcsclite.apdu.fr' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcsclite.apdu.fr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pcscd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pcscd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libusb.info^1',
    'systemd.io^254 # libudev',
    'cmake.org^3',
    'mesonbuild.com^1',
    'ninja-build.org^1',
    'github.com/westes/flex',
    'perl.org^5 # pod2man',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.3',
    '2.3.2',
    '2.3.1',
    '2.3.0',
    '2.2.3',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.0',
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pcscd',
    'pcsc-lite',
  ] as const,
}

export type PcscdPackage = typeof pcscdPackage
