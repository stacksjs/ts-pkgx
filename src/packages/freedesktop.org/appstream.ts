/**
 * **appstream** - Package from pantry: freedesktop.org/appstream
 *
 * @domain `freedesktop.org/appstream`
 *
 * @install `launchpad install freedesktop.org/appstream`
 * @dependencies `gnome.org/glib@2`, `github.com/hughsie/libxmlb@0`, `pyyaml.org/libyaml@0`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgappstream
 * console.log(pkg.name)        // "appstream"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/appstream"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/appstream.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgappstreamPackage = {
  /**
   * The display name of this package.
   */
  name: 'appstream' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/appstream' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/appstream' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/appstream' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/appstream -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/appstream' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnome.org/glib@2',
    'github.com/hughsie/libxmlb@0',
    'pyyaml.org/libyaml@0',
    'curl.se@8',
    'gnome.org/libxml2@2',
    'darwin:openldap.org^2 # 1.0.4 needs it with curl',
    'linux:systemd.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/appstream/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgappstreamPackage = typeof freedesktoporgappstreamPackage
