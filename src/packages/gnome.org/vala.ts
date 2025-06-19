/**
 * **vala** - Compiler for the GObject type system
 *
 * @domain `gnome.org/vala`
 * @programs `vala`, `valac`, `valadoc`, `vala-gen-introspect`, `vapigen`
 * @version `0.56.18` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnome.org/vala -- $SHELL -i`
 * @dependencies `gnome.org/glib`, `graphviz.org`, `freedesktop.org/pkg-config`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgvala
 * console.log(pkg.name)        // "vala"
 * console.log(pkg.description) // "Compiler for the GObject type system"
 * console.log(pkg.programs)    // ["vala", "valac", ...]
 * console.log(pkg.versions[0]) // "0.56.18" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/vala.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgvalaPackage = {
  /**
   * The display name of this package.
   */
  name: 'vala' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/vala' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Compiler for the GObject type system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/vala/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +gnome.org/vala -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vala',
    'valac',
    'valadoc',
    'vala-gen-introspect',
    'vapigen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'graphviz.org',
    'freedesktop.org/pkg-config',
    'gnu.org/gettext',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.56.18',
    '0.56.17',
    '0.56.16',
    '0.56.15',
    '0.56.14',
    '0.56.13',
  ] as const,
  aliases: [] as const,
}

export type GnomeorgvalaPackage = typeof gnomeorgvalaPackage
