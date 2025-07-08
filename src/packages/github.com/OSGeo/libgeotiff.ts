/**
 * **libgeotiff** - Package from pantry: github.com/OSGeo/libgeotiff
 *
 * @domain `github.com/OSGeo/libgeotiff`
 *
 * @install `launchpad install github.com/OSGeo/libgeotiff`
 * @dependencies `libjpeg-turbo.org`, `simplesystems.org/libtiff`, `proj.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomosgeolibgeotiff
 * console.log(pkg.name)        // "libgeotiff"
 * console.log(pkg.description) // "Package from pantry: github.com/OSGeo/libgeotiff"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OSGeo/libgeotiff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomosgeolibgeotiffPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgeotiff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OSGeo/libgeotiff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/OSGeo/libgeotiff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/OSGeo/libgeotiff' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/OSGeo/libgeotiff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/OSGeo/libgeotiff' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org',
    'simplesystems.org/libtiff',
    'proj.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/OSGeo/libgeotiff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomosgeolibgeotiffPackage = typeof githubcomosgeolibgeotiffPackage
