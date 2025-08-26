/**
 * **yarn** - Package from pantry: yarnpkg.com
 *
 * @domain `yarnpkg.com`
 *
 * @install `launchpad install yarnpkg.com`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yarnpkgcom
 * console.log(pkg.name)        // "yarnpkg.com"
 * console.log(pkg.description) // "Package from pantry: yarnpkg.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yarnpkg-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yarnPackage = {
  /**
   * The display name of this package.
   */
  name: 'yarnpkg.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yarnpkg.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: yarnpkg.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install yarnpkg.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +yarnpkg.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install yarnpkg.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yarnpkg.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type YarnPackage = typeof yarnPackage
