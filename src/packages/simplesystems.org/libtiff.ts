/**
 * **libtiff** - Package from pantry: simplesystems.org/libtiff
 *
 * @domain `simplesystems.org/libtiff`
 *
 * @install `launchpad install simplesystems.org/libtiff`
 * @dependencies `facebook.com/zstd^1`, `libjpeg-turbo.org^2`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.simplesystemsorglibtiff
 * console.log(pkg.name)        // "libtiff"
 * console.log(pkg.description) // "Package from pantry: simplesystems.org/libtiff"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/simplesystems-org/libtiff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const simplesystemsorglibtiffPackage = {
  /**
   * The display name of this package.
   */
  name: 'libtiff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'simplesystems.org/libtiff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: simplesystems.org/libtiff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install simplesystems.org/libtiff' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd^1',
    'libjpeg-turbo.org^2',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/simplesystems.org/libtiff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SimplesystemsorglibtiffPackage = typeof simplesystemsorglibtiffPackage
