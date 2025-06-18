/**
 * **conform** - Policy enforcement for your pipelines.
 *
 * @domain `github.com/siderolabs/conform`
 * @programs `conform`
 * @version `2022.10.25` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) conform`
 * @name `conform`
 * @aliases `siderolabs/conform`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.conform
 * // Or access via domain
 * const samePkg = pantry.githubcomsiderolabsconform
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "conform"
 * console.log(pkg.description) // "Policy enforcement for your pipelines."
 * console.log(pkg.programs)    // ["conform"]
 * console.log(pkg.versions[0]) // "2022.10.25" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/siderolabs/conform.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const conformPackage = {
  /**
   * The display name of this package.
   */
  name: 'conform' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/siderolabs/conform' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Policy enforcement for your pipelines.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/siderolabs/conform/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) conform' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'conform',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2022.10.25',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'siderolabs/conform',
  ] as const,
  fullPath: 'github.com/siderolabs/conform' as const,
}

export type ConformPackage = typeof conformPackage
