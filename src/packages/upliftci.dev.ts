/**
 * **uplift** - Semantic versioning the easy way. Powered by Conventional Commits. Built for use with CI.
 *
 * @domain `upliftci.dev`
 * @programs `uplift`
 * @version `2.25.0` (5 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/upliftci-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) uplift`
 * @name `uplift`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.uplift
 * // Or access via domain
 * const samePkg = pantry.upliftcidev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "uplift"
 * console.log(pkg.description) // "Semantic versioning the easy way. Powered by Co..."
 * console.log(pkg.programs)    // ["uplift"]
 * console.log(pkg.versions[0]) // "2.25.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/upliftci-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const upliftPackage = {
  /**
   * The display name of this package.
   */
  name: 'uplift' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'upliftci.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Semantic versioning the easy way. Powered by Conventional Commits. Built for use with CI.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/upliftci.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) uplift' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'uplift',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.25.0',
    '2.24.1',
    '2.24.0',
    '2.23.0',
    '2.22.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'upliftci.dev' as const,
}

export type UpliftPackage = typeof upliftPackage
