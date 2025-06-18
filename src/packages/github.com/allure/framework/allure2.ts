/**
 * **github.com/allure-framework/allure2** - pkgx package
 *
 * @domain `github.com/allure/framework/allure2`
 *
 * @install `pkgx github.com/allure-framework/allure2`
 * @aliases `github.com/allure-framework/allure2`, `allure-framework/allure2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomallureframeworkallure2
 * // Or access via domain
 * const samePkg = pantry.githubcomallureframeworkallure2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "allure-framework"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/allure/framework/allure2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomallureframeworkallure2Package = {
  /**
   * The display name of this package.
   */
  name: 'allure-framework' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/allure/framework/allure2' as const,
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
  installCommand: 'pkgx github.com/allure-framework/allure2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/allure-framework/allure2',
    'allure-framework/allure2',
  ] as const,
  fullPath: 'github.com/allure-framework/allure2' as const,
}

export type Githubcomallureframeworkallure2Package = typeof githubcomallureframeworkallure2Package
