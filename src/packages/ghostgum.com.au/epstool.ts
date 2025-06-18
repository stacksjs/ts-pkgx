/**
 * **epstool** - Edit preview images and fix bounding boxes in EPS files
 *
 * @domain `ghostgum.com.au/epstool`
 * @programs `epstool`
 * @version `3.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) epstool`
 * @name `epstool`
 * @dependencies `ghostscript.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.epstool
 * // Or access via domain
 * const samePkg = pantry.ghostgumcomauepstool
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "epstool"
 * console.log(pkg.description) // "Edit preview images and fix bounding boxes in E..."
 * console.log(pkg.programs)    // ["epstool"]
 * console.log(pkg.versions[0]) // "3.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ghostgum-com-au/epstool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const epstoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'epstool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ghostgum.com.au/epstool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Edit preview images and fix bounding boxes in EPS files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ghostgum.com.au/epstool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) epstool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'epstool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ghostscript.com',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'ghostgum.com.au/epstool' as const,
}

export type EpstoolPackage = typeof epstoolPackage
