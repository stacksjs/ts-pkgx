/**
 * **age-plugin-yubikey** - Package from pantry: github.com/str4d/age-plugin-yubikey
 *
 * @domain `github.com/str4d/age-plugin-yubikey`
 *
 * @install `launchpad install github.com/str4d/age-plugin-yubikey`
 * @dependencies `linux:pcsclite.apdu.fr^2` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomstr4dagepluginyubikey
 * console.log(pkg.name)        // "age-plugin-yubikey"
 * console.log(pkg.description) // "Package from pantry: github.com/str4d/age-plugi..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/str4d/age-plugin-yubikey.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomstr4dagepluginyubikeyPackage = {
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
  description: 'Package from pantry: github.com/str4d/age-plugin-yubikey' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/str4d/age-plugin-yubikey' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/str4d/age-plugin-yubikey -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/str4d/age-plugin-yubikey' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:pcsclite.apdu.fr^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/str4d/age-plugin-yubikey/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomstr4dagepluginyubikeyPackage = typeof githubcomstr4dagepluginyubikeyPackage
