/**
 * **elvish** - Powerful scripting language & versatile interactive shell
 *
 * @domain `elv.sh`
 * @programs `elvish`
 * @version `0.21.0` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/elv-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) elvish`
 * @name `elvish`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.elvish
 * // Or access via domain
 * const samePkg = pantry.elvsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "elvish"
 * console.log(pkg.description) // "Powerful scripting language & versatile interac..."
 * console.log(pkg.programs)    // ["elvish"]
 * console.log(pkg.versions[0]) // "0.21.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elv-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elvishPackage = {
  /**
   * The display name of this package.
   */
  name: 'elvish' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elv.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Powerful scripting language & versatile interactive shell' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elv.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) elvish' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'elvish',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.0',
    '0.20.1',
    '0.20.0',
    '0.19.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'elv.sh' as const,
}

export type ElvishPackage = typeof elvishPackage
