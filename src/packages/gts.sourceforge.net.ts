/**
 * **gts.sourceforge.net** - GNU triangulated surface library
 *
 * @domain `gts.sourceforge.net`
 * @programs `delaunay`, `gts2dxf`, `gts2oogl`, `gts2stl`, `gtscheck`, ... (+4 more)
 * @version `0.7.6` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/gts-sourceforge-net.md
 *
 * @install `sh <(curl https://pkgx.sh) +gts.sourceforge.net -- $SHELL -i`
 * @dependencies `gnome.org/glib>=2.4.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gtssourceforgenet
 * console.log(pkg.name)        // "gts.sourceforge.net"
 * console.log(pkg.description) // "GNU triangulated surface library"
 * console.log(pkg.programs)    // ["delaunay", "gts2dxf", ...]
 * console.log(pkg.versions[0]) // "0.7.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gts-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gtssourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'gts.sourceforge.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gts.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GNU triangulated surface library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gts.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gts.sourceforge.net -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'delaunay',
    'gts2dxf',
    'gts2oogl',
    'gts2stl',
    'gtscheck',
    'gtscompare',
    'gtstemplate',
    'stl2gts',
    'transform',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib>=2.4.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.6',
  ] as const,
  aliases: [] as const,
  fullPath: 'gts.sourceforge.net' as const,
}

export type GtssourceforgenetPackage = typeof gtssourceforgenetPackage
