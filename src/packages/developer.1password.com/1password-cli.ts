/**
 * **op** - pkgx package
 *
 * @domain `developer.1password.com/1password-cli`
 * @programs `op`
 * @version `2.31.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) op`
 * @aliases `op`, `1password cli`, `1password-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.op
 * // Or access via domain
 * const samePkg = pantry.developer1passwordcom1passwordcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "1Password CLI"
 * console.log(pkg.programs)    // ["op"]
 * console.log(pkg.versions[0]) // "2.31.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developer-1password-com/1password-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opPackage = {
  /**
   * The display name of this package.
   */
  name: '1Password CLI' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developer.1password.com/1password-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/developer.1password.com/1password-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) op' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'op',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.31.1',
    '2.31.0',
    '2.30.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'op',
    '1password cli',
    '1password-cli',
  ] as const,
  fullPath: 'developer.1password.com/1password-cli' as const,
}

export type OpPackage = typeof opPackage
