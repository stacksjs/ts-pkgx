/**
 * **freetype.org** - pkgx package
 *
 * @domain `freetype.org`
 * @version `2.13.3` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +freetype.org -- $SHELL -i`
 * @dependencies `libpng.org@1`, `zlib.net@1`, `sourceware.org/bzip2@1`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freetypeorg
 * console.log(pkg.name)        // "freetype.org"
 * console.log(pkg.versions[0]) // "2.13.3" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freetype.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +freetype.org -- $SHELL -i' as const,
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
    'freedesktop.org/pkg-config^0.29',
    'cmake.org',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.13.3',
    '2.13.2',
    '2.13.1',
    '2.12.1',
  ] as const,
  aliases: [] as const,
}

export type FreetypeorgPackage = typeof freetypeorgPackage
