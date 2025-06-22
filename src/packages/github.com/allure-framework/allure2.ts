/**
 * **allure2** - Package from pantry: github.com/allure-framework/allure2
 *
 * @domain `github.com/allure-framework/allure2`
 *
 * @install `launchpad install github.com/allure-framework/allure2`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomallureframeworkallure2
 * console.log(pkg.name)        // "allure2"
 * console.log(pkg.description) // "Package from pantry: github.com/allure-framewor..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/allure-framework/allure2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomallureframeworkallure2Package = {
  /**
   * The display name of this package.
   */
  name: 'allure2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/allure-framework/allure2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/allure-framework/allure2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/allure-framework/allure2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/allure-framework/allure2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/allure-framework/allure2' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/allure-framework/allure2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomallureframeworkallure2Package = typeof githubcomallureframeworkallure2Package
