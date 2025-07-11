/**
 * **python-pillow.org** - Python Imaging Library (Fork)
 *
 * @domain `python-pillow.org`
 * @version `11.3.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install python-pillow.org`
 * @dependencies `libjpeg-turbo.org^2`, `pngquant.org/lib^4`, `simplesystems.org/libtiff^4`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonpilloworg
 * console.log(pkg.name)        // "python-pillow.org"
 * console.log(pkg.description) // "Python Imaging Library (Fork)"
 * console.log(pkg.versions[0]) // "11.3.0" (latest)
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
  description: 'Python Imaging Library (Fork)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python-pillow.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
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
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '11.3.0',
    '11.2.1',
    '11.1.0',
    '11.0.0',
    '10.4.0',
    '10.3.0',
    '10.2.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +python-pillow.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install python-pillow.org' as const,
}

export type PythonpilloworgPackage = typeof pythonpilloworgPackage
