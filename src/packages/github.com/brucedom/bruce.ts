/**
 * **bruce** - Basic Runtime for Uniform Compute Environments
 *
 * @domain `github.com/brucedom/bruce`
 * @programs `bruce`
 * @version `1.4.8` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) bruce`
 * @name `bruce`
 * @aliases `brucedom/bruce`
 * @companions `linux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bruce
 * // Or access via domain
 * const samePkg = pantry.githubcombrucedombruce
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bruce"
 * console.log(pkg.description) // "Basic Runtime for Uniform Compute Environments"
 * console.log(pkg.programs)    // ["bruce"]
 * console.log(pkg.versions[0]) // "1.4.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/brucedom/bruce.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brucePackage = {
  /**
   * The display name of this package.
   */
  name: 'bruce' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/brucedom/bruce' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Basic Runtime for Uniform Compute Environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/brucedom/bruce/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) bruce' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bruce',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'linux',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.8',
    '1.2.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'brucedom/bruce',
  ] as const,
  fullPath: 'github.com/brucedom/bruce' as const,
}

export type BrucePackage = typeof brucePackage
