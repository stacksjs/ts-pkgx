/**
 * **allure-framework** - pkgx package
 *
 * @domain `github.com/allure-framework`
 *
 * @install `pkgx github.com/allure-framework`
 * @name `allure-framework`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.allureframework
 * // Or access via domain
 * const samePkg = pantry.githubcomallureframework
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "allure-framework"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/allure-framework.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const allureframeworkPackage = {
  /**
   * The display name of this package.
   */
  name: 'allure-framework' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/allure-framework' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/allure-framework' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/allure-framework' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/allure-framework' as const,
}

export type AllureframeworkPackage = typeof allureframeworkPackage
