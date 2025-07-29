/**
 * **librttopo** - Package from pantry: git.osgeo.org/gitea/rttopo/librttopo
 *
 * @domain `git.osgeo.org/gitea/rttopo/librttopo`
 *
 * @install `launchpad install git.osgeo.org/gitea/rttopo/librttopo`
 * @dependencies `libgeos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitosgeoorggitearttopolibrttopo
 * console.log(pkg.name)        // "librttopo"
 * console.log(pkg.description) // "Package from pantry: git.osgeo.org/gitea/rttopo..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-osgeo-org/gitea/rttopo/librttopo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitosgeoorggitearttopolibrttopoPackage = {
  /**
   * The display name of this package.
   */
  name: 'librttopo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git.osgeo.org/gitea/rttopo/librttopo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: git.osgeo.org/gitea/rttopo/librttopo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git.osgeo.org/gitea/rttopo/librttopo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +git.osgeo.org/gitea/rttopo/librttopo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git.osgeo.org/gitea/rttopo/librttopo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgeos.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git.osgeo.org/gitea/rttopo/librttopo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitosgeoorggitearttopolibrttopoPackage = typeof gitosgeoorggitearttopolibrttopoPackage
