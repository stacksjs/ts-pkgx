/**
 * **openjpeg.org** - Package from pantry: openjpeg.org
 *
 * @domain `openjpeg.org`
 *
 * @install `launchpad install openjpeg.org`
 * @dependencies `libpng.org^1`, `simplesystems.org/libtiff^4`, `cmake.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openjpegorg
 * console.log(pkg.name)        // "openjpeg.org"
 * console.log(pkg.description) // "Package from pantry: openjpeg.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openjpeg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openjpegorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openjpeg.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openjpeg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openjpeg.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openjpeg.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1',
    'simplesystems.org/libtiff^4',
    'cmake.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openjpeg.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenjpegorgPackage = typeof openjpegorgPackage
