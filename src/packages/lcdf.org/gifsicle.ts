/**
 * **gifsicle** - Create, manipulate, and optimize GIF images and animations
 *
 * @domain `lcdf.org/gifsicle`
 * @programs `gifsicle`
 * @version `1.96.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) gifsicle`
 * @name `gifsicle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gifsicle
 * // Or access via domain
 * const samePkg = pantry.lcdforggifsicle
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gifsicle"
 * console.log(pkg.description) // "Create, manipulate, and optimize GIF images and..."
 * console.log(pkg.programs)    // ["gifsicle"]
 * console.log(pkg.versions[0]) // "1.96.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lcdf-org/gifsicle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gifsiclePackage = {
  /**
   * The display name of this package.
   */
  name: 'gifsicle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lcdf.org/gifsicle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Create, manipulate, and optimize GIF images and animations' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lcdf.org/gifsicle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gifsicle' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gifsicle',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.96.0',
    '1.95.0',
    '1.94.0',
    '1.93.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'lcdf.org/gifsicle' as const,
}

export type GifsiclePackage = typeof gifsiclePackage
