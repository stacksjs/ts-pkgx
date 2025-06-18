/**
 * **ykman** - Python library and command line tool for configuring any YubiKey over all USB interfaces.
 *
 * @domain `developers.yubico.com/yubikey-manager`
 * @programs `ykman`
 * @version `5.7.2` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ykman`
 * @name `yubikey-manager`
 * @aliases `ykman`
 * @dependencies `python.org~3.11`, `pcsclite.apdu.fr^2`, `pip.pypa.io`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ykman
 * // Or access via domain
 * const samePkg = pantry.developersyubicocomyubikeymanager
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yubikey-manager"
 * console.log(pkg.description) // "Python library and command line tool for config..."
 * console.log(pkg.programs)    // ["ykman"]
 * console.log(pkg.versions[0]) // "5.7.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developers-yubico-com/yubikey-manager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ykmanPackage = {
  /**
   * The display name of this package.
   */
  name: 'yubikey-manager' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developers.yubico.com/yubikey-manager' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python library and command line tool for configuring any YubiKey over all USB interfaces.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/yubikey-manager/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ykman' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ykman',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'pcsclite.apdu.fr^2',
    'pip.pypa.io',
    'swig.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.7.2',
    '5.7.1',
    '5.7.0',
    '5.6.1',
    '5.6.0',
    '5.5.1',
    '5.5.0',
    '5.4.0',
    '5.3.0',
    '5.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ykman',
  ] as const,
}

export type YkmanPackage = typeof ykmanPackage
