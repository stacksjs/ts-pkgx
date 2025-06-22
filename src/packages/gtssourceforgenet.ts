/**
 * **gts.sourceforge.net** - Package from pantry: gts.sourceforge.net
 *
 * @domain `gts.sourceforge.net`
 *
 * @install `launchpad install gts.sourceforge.net`
 * @dependencies `gnome.org/glib>=2.4.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gtssourceforgenet
 * console.log(pkg.name)        // "gts.sourceforge.net"
 * console.log(pkg.description) // "Package from pantry: gts.sourceforge.net"
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
  description: 'Package from pantry: gts.sourceforge.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gts.sourceforge.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gts.sourceforge.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gts.sourceforge.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib>=2.4.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gts.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GtssourceforgenetPackage = typeof gtssourceforgenetPackage
