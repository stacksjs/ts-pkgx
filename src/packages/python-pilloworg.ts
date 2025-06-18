/**
 * **python-pillow.org** - Package from pantry: python-pillow.org
 *
 * @domain `python-pillow.org`
 *
 * @install `launchpad install python-pillow.org`
 * @dependencies `libjpeg-turbo.org^2`, `pngquant.org/lib^4`, `simplesystems.org/libtiff^4`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonpilloworg
 * console.log(pkg.name)        // "python-pillow.org"
 * console.log(pkg.description) // "Package from pantry: python-pillow.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-pillow-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonpilloworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-pillow.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python-pillow.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: python-pillow.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install python-pillow.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org^2',
    'pngquant.org/lib^4',
    'simplesystems.org/libtiff^4',
    'x.org/xcb^1',
    'littlecms.com^2',
    'openjpeg.org^2',
    'tcl.tk/tcl^8',
    'google.com/webp^1',
    'zlib.net^1',
    'python.org~3.12',
    'pypa.io/setuptools',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python-pillow.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PythonpilloworgPackage = typeof pythonpilloworgPackage
