/**
 * **tectonic-typesetting.github.io** - Package from pantry: tectonic-typesetting.github.io
 *
 * @domain `tectonic-typesetting.github.io`
 *
 * @install `launchpad install tectonic-typesetting.github.io`
 * @dependencies `freetype.org`, `graphite.sil.org`, `harfbuzz.org`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tectonictypesettinggithubio
 * console.log(pkg.name)        // "tectonic-typesetting.github.io"
 * console.log(pkg.description) // "Package from pantry: tectonic-typesetting.githu..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tectonic-typesetting-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tectonictypesettinggithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tectonic-typesetting.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tectonic-typesetting.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tectonic-typesetting.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tectonic-typesetting.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freetype.org',
    'graphite.sil.org',
    'harfbuzz.org',
    'libpng.org',
    'openssl.org^1.1',
    'unicode.org^71',
    'freedesktop.org/pkg-config^0.29',
    'rust-lang.org>=1.48.0',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tectonic-typesetting.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TectonictypesettinggithubioPackage = typeof tectonictypesettinggithubioPackage
