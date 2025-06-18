/**
 * **fast_float** - Fast and exact implementation of the C++ from_chars functions for number types: 4x to 10x faster than strtod, part of GCC 12, Chromium, Redis and WebKit/Safari
 *
 * @domain `github.com/fastfloat/fast_float`
 * @version `8.0.2` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/fastfloat/fast_float -- $SHELL -i`
 * @name `fast_float`
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fastfloat
 * // Or access via domain
 * const samePkg = pantry.githubcomfastfloatfast_float
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fast_float"
 * console.log(pkg.description) // "Fast and exact implementation of the C++ from_c..."
 * console.log(pkg.versions[0]) // "8.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fastfloat/fast_float.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastfloatPackage = {
  /**
   * The display name of this package.
   */
  name: 'fast_float' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fastfloat/fast_float' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast and exact implementation of the C++ from_chars functions for number types: 4x to 10x faster than strtod, part of GCC 12, Chromium, Redis and WebKit/Safari' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/fastfloat/fast_float/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/fastfloat/fast_float -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.0.2',
    '8.0.1',
    '8.0.0',
    '7.0.0',
    '6.1.6',
    '6.1.5',
    '6.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type FastfloatPackage = typeof fastfloatPackage
