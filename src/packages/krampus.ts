/**
 * **krampus** - Command-line tool to kill one or more processes by port number
 *
 * @domain `idleberg.github.io/krampus`
 * @programs `krampus`
 * @version `0.2.1` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/idleberg-github-io/krampus.md
 *
 * @install `sh <(curl https://pkgx.sh) krampus`
 * @name `krampus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.krampus
 * // Or access via domain
 * const samePkg = pantry.idleberggithubiokrampus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "krampus"
 * console.log(pkg.description) // "Command-line tool to kill one or more processes..."
 * console.log(pkg.programs)    // ["krampus"]
 * console.log(pkg.versions[0]) // "0.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/idleberg-github-io/krampus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const krampusPackage = {
  /**
   * The display name of this package.
   */
  name: 'krampus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'idleberg.github.io/krampus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line tool to kill one or more processes by port number' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/idleberg.github.io/krampus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) krampus' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'krampus',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.1',
    '0.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'idleberg.github.io/krampus' as const,
}

export type KrampusPackage = typeof krampusPackage
