/**
 * **angular.dev** - Package from pantry: angular.dev
 *
 * @domain `angular.dev`
 *
 * @install `launchpad install angular.dev`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.angulardev
 * console.log(pkg.name)        // "angular.dev"
 * console.log(pkg.description) // "Package from pantry: angular.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/angular-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const angulardevPackage = {
  /**
   * The display name of this package.
   */
  name: 'angular.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'angular.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: angular.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install angular.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +angular.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install angular.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/angular.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AngulardevPackage = typeof angulardevPackage
