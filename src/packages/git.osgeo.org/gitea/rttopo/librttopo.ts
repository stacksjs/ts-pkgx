/**
 * **librttopo** - pkgx package
 *
 * @domain `git.osgeo.org/gitea/rttopo/librttopo`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +git.osgeo.org/gitea/rttopo/librttopo -- $SHELL -i`
 * @dependencies `libgeos.org`, `gnu.org/autoconf`, `gnu.org/automake`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitosgeoorggitearttopolibrttopo
 * console.log(pkg.name)        // "librttopo"
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-osgeo-org/gitea/rttopo/librttopo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitosgeoorggitea/rttopo/librttopoPackage = {
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git.osgeo.org/gitea/rttopo/librttopo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +git.osgeo.org/gitea/rttopo/librttopo -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgeos.org',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/libtool',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
  ] as const,
  aliases: [] as const,
}

export type Gitosgeoorggitea/rttopo/librttopoPackage = typeof gitosgeoorggitea/rttopo/librttopoPackage
