/**
 * **graphviz.org** - Package from pantry: graphviz.org
 *
 * @domain `graphviz.org`
 *
 * @install `launchpad install graphviz.org`
 * @dependencies `cairographics.org^1.1.10`, `freedesktop.org/fontconfig^2.3.95`, `freetype.org^2.1.0`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphvizorg
 * console.log(pkg.name)        // "graphviz.org"
 * console.log(pkg.description) // "Package from pantry: graphviz.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphviz-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphvizorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'graphviz.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphviz.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: graphviz.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install graphviz.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org^1.1.10',
    'freedesktop.org/fontconfig^2.3.95',
    'freetype.org^2.1.0',
    'gnome.org/glib^2.11.0',
    'gnome.org/pango^1.12.4',
    'gnu.org/libtool^2',
    'libexpat.github.io^2.0.0',
    'libpng.org^1.2.10',
    'poppler.freedesktop.org',
    'zlib.net^1.2.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/graphviz.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GraphvizorgPackage = typeof graphvizorgPackage
