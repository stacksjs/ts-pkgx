/**
 * **age-plugin-yubikey** - Plugin for encrypting files with age and PIV tokens such as YubiKeys
 *
 * @domain `github.com/str4d/age-plugin-yubikey`
 * @programs `age-plugin-yubikey`
 * @version `0.5.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install age-plugin-yubikey`
 * @name `age-plugin-yubikey`
 * @dependencies `linux:pcsclite.apdu.fr^2` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.agepluginyubikey
 * // Or access via domain
 * const samePkg = pantry.githubcomstr4dagepluginyubikey
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "age-plugin-yubikey"
 * console.log(pkg.description) // "Plugin for encrypting files with age and PIV to..."
 * console.log(pkg.programs)    // ["age-plugin-yubikey"]
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/str4d/age-plugin-yubikey.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agepluginyubikeyPackage = {
  /**
   * The display name of this package.
   */
  name: 'age-plugin-yubikey' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/str4d/age-plugin-yubikey' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Plugin for encrypting files with age and PIV tokens such as YubiKeys' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/str4d/age-plugin-yubikey/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install age-plugin-yubikey' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'age-plugin-yubikey',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:pcsclite.apdu.fr^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
    '0.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type AgepluginyubikeyPackage = typeof agepluginyubikeyPackage
