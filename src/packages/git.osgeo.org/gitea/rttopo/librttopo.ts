/**
 * **git.osgeo.org/gitea/rttopo/librttopo** - pkgx package
 *
 * @domain `git.osgeo.org/gitea/rttopo/librttopo`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git.osgeo.org/gitea/rttopo/librttopo`
 * @dependencies `libgeos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitosgeoorggitearttopolibrttopo
 * console.log(pkg.name)        // "git.osgeo.org/gitea/rttopo/librttopo"
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-osgeo-org/gitea/rttopo/librttopo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitosgeoorggitearttopolibrttopoPackage = {
  /**
   * The display name of this package.
   */
  name: 'git.osgeo.org/gitea/rttopo/librttopo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git.osgeo.org/gitea/rttopo/librttopo' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git.osgeo.org/gitea/rttopo/librttopo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git.osgeo.org/gitea/rttopo/librttopo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgeos.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +git.osgeo.org/gitea/rttopo/librttopo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git.osgeo.org/gitea/rttopo/librttopo' as const,
}

export type GitosgeoorggitearttopolibrttopoPackage = typeof gitosgeoorggitearttopolibrttopoPackage
