/**
 * **gobject-introspection** - Package from pantry: gnome.org/gobject-introspection
 *
 * @domain `gnome.org/gobject-introspection`
 *
 * @install `launchpad install gnome.org/gobject-introspection`
 * @dependencies `gnome.org/glib@2`, `sourceware.org/libffi@3`, `gnu.org/bison^3 #NOTE macOS provides v2`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorggobjectintrospection
 * console.log(pkg.name)        // "gobject-introspection"
 * console.log(pkg.description) // "Package from pantry: gnome.org/gobject-introspe..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gobject-introspection.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorggobjectintrospectionPackage = {
  /**
   * The display name of this package.
   */
  name: 'gobject-introspection' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gobject-introspection' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/gobject-introspection' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/gobject-introspection' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gobject-introspection -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/gobject-introspection' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
    'sourceware.org/libffi@3',
    'gnu.org/bison^3 #NOTE macOS provides v2',
    'python.org>=3<3.12',
    'github.com/westes/flex@2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gobject-introspection/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorggobjectintrospectionPackage = typeof gnomeorggobjectintrospectionPackage
