/**
 * **github.com/str4d/age-plugin-yubikey** - pkgx package
 *
 * @domain `github.com/str4d/age/plugin-yubikey`
 *
 * @install `pkgx github.com/str4d/age-plugin-yubikey`
 * @aliases `github.com/str4d/age-plugin-yubikey`, `str4d/age-plugin-yubikey`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomstr4dagepluginyubikey
 * // Or access via domain
 * const samePkg = pantry.githubcomstr4dagepluginyubikey
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "str4d"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/str4d/age/plugin-yubikey.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomstr4dagepluginyubikeyPackage = {
  /**
   * The display name of this package.
   */
  name: 'str4d' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/str4d/age/plugin-yubikey' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/str4d/age-plugin-yubikey' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/str4d/age-plugin-yubikey',
    'str4d/age-plugin-yubikey',
  ] as const,
  fullPath: 'github.com/str4d/age-plugin-yubikey' as const,
}

export type Githubcomstr4dagepluginyubikeyPackage = typeof githubcomstr4dagepluginyubikeyPackage
