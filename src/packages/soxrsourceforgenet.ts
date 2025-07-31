/**
 * **soxr.sourceforge.net** - pkgx package
 *
 * @domain `soxr.sourceforge.net`
 * @version `0.1.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install soxr.sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.soxrsourceforgenet
 * console.log(pkg.name)        // "soxr.sourceforge.net"
 * console.log(pkg.versions[0]) // "0.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soxr-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soxrsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'soxr.sourceforge.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soxr.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/soxr.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install soxr.sourceforge.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +soxr.sourceforge.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install soxr.sourceforge.net' as const,
}

export type SoxrsourceforgenetPackage = typeof soxrsourceforgenetPackage
