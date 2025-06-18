/**
 * **tectonic** - A modernized, complete, self-contained TeX/LaTeX engine, powered by XeTeX and TeXLive.
 *
 * @domain `tectonic-typesetting.github.io`
 * @programs `tectonic`
 * @version `0.15.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tectonic`
 * @aliases `tectonic`
 * @dependencies `freetype.org`, `graphite.sil.org`, `harfbuzz.org`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tectonic
 * // Or access via domain
 * const samePkg = pantry.tectonictypesettinggithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tectonic-typesetting.github.io"
 * console.log(pkg.description) // "A modernized, complete, self-contained TeX/LaTe..."
 * console.log(pkg.programs)    // ["tectonic"]
 * console.log(pkg.versions[0]) // "0.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tectonic-typesetting-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tectonicPackage = {
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
  description: 'A modernized, complete, self-contained TeX/LaTeX engine, powered by XeTeX and TeXLive.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tectonic-typesetting.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tectonic' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tectonic',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.0',
    '0.14.1',
    '0.14.0',
    '0.13.1',
    '0.13.0',
    '0.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tectonic',
  ] as const,
}

export type TectonicPackage = typeof tectonicPackage
