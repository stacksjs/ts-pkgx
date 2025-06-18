/**
 * **g-ir** - Generate introspection data for GObject libraries
 *
 * @domain `gnome.org/gobject-introspection`
 * @programs `g-ir-annotation-tool`, `g-ir-compiler`, `g-ir-generate`, `g-ir-inspect`, `g-ir-scanner`
 * @version `1.84.0` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gobject-introspection.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/gobject-introspection -- $SHELL -i`
 * @name `g-ir`
 * @aliases `gobject-introspection`
 * @dependencies `gnome.org/glib@2`, `sourceware.org/libffi@3`, `gnu.org/bison@3`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gir
 * // Or access via domain
 * const samePkg = pantry.gnomeorggobjectintrospection
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "g-ir"
 * console.log(pkg.description) // "Generate introspection data for GObject libraries"
 * console.log(pkg.programs)    // ["g-ir-annotation-tool", "g-ir-compiler", ...]
 * console.log(pkg.versions[0]) // "1.84.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gobject-introspection.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const girPackage = {
  /**
   * The display name of this package.
   */
  name: 'g-ir' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gobject-introspection' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate introspection data for GObject libraries' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gobject-introspection/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gobject-introspection -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'g-ir-annotation-tool',
    'g-ir-compiler',
    'g-ir-generate',
    'g-ir-inspect',
    'g-ir-scanner',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
    'sourceware.org/libffi@3',
    'gnu.org/bison@3',
    'python.org>=3<3.12',
    'github.com/westes/flex@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.84.0',
    '1.83.4',
    '1.83.2',
    '1.82.0',
    '1.72.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gobject-introspection',
  ] as const,
  fullPath: 'gnome.org/gobject-introspection' as const,
}

export type GirPackage = typeof girPackage
