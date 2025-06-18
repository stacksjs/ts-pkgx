/**
 * **pcsclite.apdu.fr** - Package from pantry: pcsclite.apdu.fr
 *
 * @domain `pcsclite.apdu.fr`
 *
 * @install `launchpad install pcsclite.apdu.fr`
 * @dependencies `libusb.info^1`, `systemd.io^254 # libudev`, `cmake.org^3`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pcscliteapdufr
 * console.log(pkg.name)        // "pcsclite.apdu.fr"
 * console.log(pkg.description) // "Package from pantry: pcsclite.apdu.fr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcsclite-apdu-fr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcscliteapdufrPackage = {
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
  description: 'Package from pantry: pcsclite.apdu.fr' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pcsclite.apdu.fr' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcsclite.apdu.fr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PcscliteapdufrPackage = typeof pcscliteapdufrPackage
