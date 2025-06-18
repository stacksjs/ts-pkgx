/**
 * **vala** - Compiler for the GObject type system
 *
 * @domain `gnome.org/vala`
 * @programs `vala`, `valac`, `valadoc`, `vala-gen-introspect`, `vapigen`
 * @version `0.56.18` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/vala.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/vala -- $SHELL -i`
 * @aliases `vala`
 * @dependencies `gnome.org/glib`, `graphviz.org`, `freedesktop.org/pkg-config`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.vala
 * // Or access via domain
 * const samePkg = pantry.gnomeorgvala
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnome.org/vala"
 * console.log(pkg.description) // "Compiler for the GObject type system"
 * console.log(pkg.programs)    // ["vala", "valac", ...]
 * console.log(pkg.versions[0]) // "0.56.18" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/vala.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valaPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/vala' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/vala -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'vala',
  ] as const,
  fullPath: 'gnome.org/vala' as const,
}

export type ValaPackage = typeof valaPackage
