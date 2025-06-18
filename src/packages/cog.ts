/**
 * **cog** - The Conventional Commits toolbox
 *
 * @domain `cocogitto.io`
 * @programs `cog`
 * @version `6.3.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) cog`
 * @name `cog`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cog
 * // Or access via domain
 * const samePkg = pantry.cocogittoio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cog"
 * console.log(pkg.description) // "The Conventional Commits toolbox"
 * console.log(pkg.programs)    // ["cog"]
 * console.log(pkg.versions[0]) // "6.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocogitto-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cogPackage = {
  /**
   * The display name of this package.
   */
  name: 'cog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocogitto.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Conventional Commits toolbox' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cocogitto.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cog' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cog',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.3.0',
    '6.2.0',
    '6.1.0',
    '6.0.1',
    '6.0.0',
    '5.6.0',
    '5.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cog' as const,
}

export type CogPackage = typeof cogPackage
