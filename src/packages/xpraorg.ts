/**
 * **xpra.org** - Package from pantry: xpra.org
 *
 * @domain `xpra.org`
 *
 * @install `launchpad install xpra.org`
 * @dependencies `pkgx.sh^1`, `python.org~3.11`, `cython.org`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xpraorg
 * console.log(pkg.name)        // "xpra.org"
 * console.log(pkg.description) // "Package from pantry: xpra.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xpra-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xpraorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'xpra.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xpra.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xpra.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xpra.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.11',
    'cython.org',
    'tukaani.org/xz',
    'cairographics.org',
    'cairographics.org/pycairo^1.26.1',
    'freedesktop.org/pkg-config~0.29',
    'gnome.org/PyGObject',
    'gnome.org/glib',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xpra.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XpraorgPackage = typeof xpraorgPackage
