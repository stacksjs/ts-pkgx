/**
 * **autossh** - Automatically restart SSH sessions and tunnels
 *
 * @domain `harding.motd.ca/autossh`
 * @programs `autossh`
 * @version `1.4f` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/harding-motd-ca/autossh.md
 *
 * @install `sh <(curl https://pkgx.sh) autossh`
 * @name `autossh`
 * @dependencies `openssh.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.autossh
 * // Or access via domain
 * const samePkg = pantry.hardingmotdcaautossh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "autossh"
 * console.log(pkg.description) // "Automatically restart SSH sessions and tunnels"
 * console.log(pkg.programs)    // ["autossh"]
 * console.log(pkg.versions[0]) // "1.4f" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/harding-motd-ca/autossh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const autosshPackage = {
  /**
   * The display name of this package.
   */
  name: 'autossh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'harding.motd.ca/autossh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Automatically restart SSH sessions and tunnels' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/harding.motd.ca/autossh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) autossh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'autossh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssh.com',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4f',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'harding.motd.ca/autossh' as const,
}

export type AutosshPackage = typeof autosshPackage
