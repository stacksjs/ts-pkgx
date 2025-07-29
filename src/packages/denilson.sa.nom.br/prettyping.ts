/**
 * **prettyping** - `prettyping` is a wrapper around the standard `ping` tool, making the output prettier, more colorful, more compact, and easier to read.
 *
 * @domain `denilson.sa.nom.br/prettyping`
 * @programs `prettyping`
 * @version `1.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install prettyping`
 * @name `prettyping`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.prettyping
 * // Or access via domain
 * const samePkg = pantry.denilsonsanombrprettyping
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "prettyping"
 * console.log(pkg.description) // "`prettyping` is a wrapper around the standard `..."
 * console.log(pkg.programs)    // ["prettyping"]
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/denilson-sa-nom-br/prettyping.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prettypingPackage = {
  /**
   * The display name of this package.
   */
  name: 'prettyping' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'denilson.sa.nom.br/prettyping' as const,
  /**
   * Brief description of what this package does.
   */
  description: '`prettyping` is a wrapper around the standard `ping` tool, making the output prettier, more colorful, more compact, and easier to read.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/denilson.sa.nom.br/prettyping/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install prettyping' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'prettyping',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
    '1.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) prettyping -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install prettyping' as const,
}

export type PrettypingPackage = typeof prettypingPackage
