/**
 * **qhull.org** - Qhull development for www.qhull.org -- Qhull 2020.2 (8.1-alpha1) at https://github.com/qhull/qhull/wiki
 *
 * @domain `qhull.org`
 * @programs `qconvex`, `qdelaunay`, `qhalf`, `qhull`, `qvoronoi`, ... (+1 more)
 * @version `8.0.2` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/qhull-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +qhull.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qhullorg
 * console.log(pkg.name)        // "qhull.org"
 * console.log(pkg.description) // "Qhull development for www.qhull.org -- Qhull 20..."
 * console.log(pkg.programs)    // ["qconvex", "qdelaunay", ...]
 * console.log(pkg.versions[0]) // "8.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qhull-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qhullorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'qhull.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qhull.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Qhull development for www.qhull.org -- Qhull 2020.2 (8.1-alpha1) at https://github.com/qhull/qhull/wiki' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/qhull.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +qhull.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'qconvex',
    'qdelaunay',
    'qhalf',
    'qhull',
    'qvoronoi',
    'rbox',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.0.2',
  ] as const,
  fullPath: 'qhull.org' as const,
  aliases: [] as const,
}

export type QhullorgPackage = typeof qhullorgPackage
