/**
 * **yarn** - Package from pantry: classic.yarnpkg.com
 *
 * @domain `classic.yarnpkg.com`
 *
 * @install `launchpad install classic.yarnpkg.com`
 * @dependencies `nodejs.org>=5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.classicyarnpkgcom
 * console.log(pkg.name)        // "classic.yarnpkg.com"
 * console.log(pkg.description) // "Package from pantry: classic.yarnpkg.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/classic-yarnpkg-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const classicYarnPackage = {
  /**
   * The display name of this package.
   */
  name: 'classic.yarnpkg.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'classic.yarnpkg.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: classic.yarnpkg.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install classic.yarnpkg.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +classic.yarnpkg.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install classic.yarnpkg.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org>=5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/classic.yarnpkg.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ClassicYarnPackage = typeof classicYarnPackage
