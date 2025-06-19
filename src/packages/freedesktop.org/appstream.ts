/**
 * **appstreamcli** - Tools and libraries to work with AppStream metadata
 *
 * @domain `freedesktop.org/appstream`
 * @programs `appstreamcli`
 * @version `1.0.5` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install appstreamcli`
 * @aliases `appstreamcli`
 * @dependencies `gnome.org/glib@2`, `github.com/hughsie/libxmlb@0`, `pyyaml.org/libyaml@0`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.appstreamcli
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgappstream
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "appstream"
 * console.log(pkg.description) // "Tools and libraries to work with AppStream meta..."
 * console.log(pkg.programs)    // ["appstreamcli"]
 * console.log(pkg.versions[0]) // "1.0.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/appstream.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const appstreamcliPackage = {
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
  description: 'Tools and libraries to work with AppStream metadata' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/appstream/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install appstreamcli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'appstreamcli',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.5',
    '1.0.4',
    '1.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'appstreamcli',
  ] as const,
}

export type AppstreamcliPackage = typeof appstreamcliPackage
