/**
 * **yubikey-manager** - Package from pantry: developers.yubico.com/yubikey-manager
 *
 * @domain `developers.yubico.com/yubikey-manager`
 *
 * @install `launchpad install developers.yubico.com/yubikey-manager`
 * @dependencies `python.org~3.11`, `linux:pcsclite.apdu.fr^2` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.developersyubicocomyubikeymanager
 * console.log(pkg.name)        // "yubikey-manager"
 * console.log(pkg.description) // "Package from pantry: developers.yubico.com/yubi..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developers-yubico-com/yubikey-manager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const developersyubicocomyubikeymanagerPackage = {
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
  description: 'Package from pantry: developers.yubico.com/yubikey-manager' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install developers.yubico.com/yubikey-manager' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +developers.yubico.com/yubikey-manager -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install developers.yubico.com/yubikey-manager' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'python.org~3.11',
    'linux:pcsclite.apdu.fr^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/developers.yubico.com/yubikey-manager/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DevelopersyubicocomyubikeymanagerPackage = typeof developersyubicocomyubikeymanagerPackage
