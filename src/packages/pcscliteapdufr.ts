/**
 * **pcsclite.apdu.fr** - Package from pantry: pcsclite.apdu.fr
 *
 * @domain `pcsclite.apdu.fr`
 *
 * @install `launchpad install pcsclite.apdu.fr`
 * @dependencies `libusb.info^1`, `linux:systemd.io^254 # libudev` (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pcsclite.apdu.fr' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pcsclite.apdu.fr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pcsclite.apdu.fr' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libusb.info^1',
    'linux:systemd.io^254 # libudev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcsclite.apdu.fr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PcscliteapdufrPackage = typeof pcscliteapdufrPackage
