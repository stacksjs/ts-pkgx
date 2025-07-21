/**
 * **moon** - Package from pantry: moonrepo.dev/moon
 *
 * @domain `moonrepo.dev/moon`
 *
 * @install `launchpad install moonrepo.dev/moon`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.moonrepodevmoon
 * console.log(pkg.name)        // "moon"
 * console.log(pkg.description) // "Package from pantry: moonrepo.dev/moon"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/moonrepo-dev/moon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moonrepodevmoonPackage = {
  /**
   * The display name of this package.
   */
  name: 'moon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'moonrepo.dev/moon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: moonrepo.dev/moon' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install moonrepo.dev/moon' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +moonrepo.dev/moon -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install moonrepo.dev/moon' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/moonrepo.dev/moon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MoonrepodevmoonPackage = typeof moonrepodevmoonPackage
