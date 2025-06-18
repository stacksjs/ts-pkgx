/**
 * **developer.1password.com/1password-cli** - pkgx package
 *
 * @domain `developer.1password.com/1password/cli`
 *
 * @install `pkgx developer.1password.com/1password-cli`
 * @name `1password-cli`
 * @aliases `developer.1password.com/1password-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.developer1passwordcom1passwordcli
 * // Or access via domain
 * const samePkg = pantry.developer1passwordcom1passwordcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "1password-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developer-1password-com/1password/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const developer1passwordcom1passwordcliPackage = {
  /**
   * The display name of this package.
   */
  name: '1password-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developer.1password.com/1password/cli' as const,
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
  installCommand: 'pkgx developer.1password.com/1password-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'developer.1password.com/1password-cli',
  ] as const,
  fullPath: 'developer.1password.com/1password-cli' as const,
}

export type Developer1passwordcom1passwordcliPackage = typeof developer1passwordcom1passwordcliPackage
