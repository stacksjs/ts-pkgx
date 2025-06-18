/**
 * **polkit** - polkit (formerly PolicyKit) is a toolkit for defining and handling authorizations. It is used for allowing unprivileged processes to speak to privileged processes.
 *
 * @domain `freedesktop.org/polkit`
 * @programs `pkaction`, `pkcheck`, `pkexec`, `pkttyagent`
 * @version `121.0.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/polkit.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/polkit -- $SHELL -i`
 * @aliases `polkit`
 * @dependencies `gnome.org/glib^2.78`, `duktape.org^2.7`, `gnome.org/gobject-introspection^1.72`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.polkit
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgpolkit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/polkit"
 * console.log(pkg.description) // "polkit (formerly PolicyKit) is a toolkit for de..."
 * console.log(pkg.programs)    // ["pkaction", "pkcheck", ...]
 * console.log(pkg.versions[0]) // "121.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/polkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const polkitPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/polkit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/polkit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'polkit (formerly PolicyKit) is a toolkit for defining and handling authorizations. It is used for allowing unprivileged processes to speak to privileged processes.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/polkit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/polkit -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pkaction',
    'pkcheck',
    'pkexec',
    'pkttyagent',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib^2.78',
    'duktape.org^2.7',
    'gnome.org/gobject-introspection^1.72',
    'freedesktop.org/dbus^1.12',
    'linux-pam.org^1.4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '121.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'polkit',
  ] as const,
  fullPath: 'freedesktop.org/polkit' as const,
}

export type PolkitPackage = typeof polkitPackage
