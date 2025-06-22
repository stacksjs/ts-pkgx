/**
 * **freedesktop.org/slirp** - pkgx package
 *
 * @domain `freedesktop.org/slirp`
 * @version `4.9.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install freedesktop.org/slirp`
 * @dependencies `gnome.org/glib^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgslirp
 * console.log(pkg.name)        // "freedesktop.org/slirp"
 * console.log(pkg.versions[0]) // "4.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/slirp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgslirpPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/slirp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/slirp' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/slirp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/slirp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.9.1',
    '4.9.0',
    '4.8.0',
    '4.7.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/slirp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/slirp' as const,
}

export type FreedesktoporgslirpPackage = typeof freedesktoporgslirpPackage
