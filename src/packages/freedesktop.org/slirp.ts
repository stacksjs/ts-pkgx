/**
 * **slirp** - Package from pantry: freedesktop.org/slirp
 *
 * @domain `freedesktop.org/slirp`
 *
 * @install `launchpad install freedesktop.org/slirp`
 * @dependencies `gnome.org/glib^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgslirp
 * console.log(pkg.name)        // "slirp"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/slirp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/slirp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgslirpPackage = {
  /**
   * The display name of this package.
   */
  name: 'slirp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/slirp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/slirp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/slirp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/slirp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/slirp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/slirp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgslirpPackage = typeof freedesktoporgslirpPackage
