/**
 * **freetype.org** - Package from pantry: freetype.org
 *
 * @domain `freetype.org`
 *
 * @install `launchpad install freetype.org`
 * @dependencies `libpng.org@1`, `zlib.net@1`, `sourceware.org/bzip2@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freetypeorg
 * console.log(pkg.name)        // "freetype.org"
 * console.log(pkg.description) // "Package from pantry: freetype.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freetype-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freetypeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'freetype.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freetype.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freetype.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freetype.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freetype.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freetype.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org@1',
    'zlib.net@1',
    'sourceware.org/bzip2@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freetype.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreetypeorgPackage = typeof freetypeorgPackage
