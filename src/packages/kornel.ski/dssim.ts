/**
 * **dssim** - Image similarity comparison simulating human perception (multiscale SSIM in Rust)
 *
 * @domain `kornel.ski/dssim`
 * @programs `dssim`
 * @version `3.4.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) dssim`
 * @name `dssim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dssim
 * // Or access via domain
 * const samePkg = pantry.kornelskidssim
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dssim"
 * console.log(pkg.description) // "Image similarity comparison simulating human pe..."
 * console.log(pkg.programs)    // ["dssim"]
 * console.log(pkg.versions[0]) // "3.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kornel-ski/dssim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dssimPackage = {
  /**
   * The display name of this package.
   */
  name: 'dssim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kornel.ski/dssim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Image similarity comparison simulating human perception (multiscale SSIM in Rust)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kornel.ski/dssim/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dssim' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dssim',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.0',
    '3.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'kornel.ski/dssim' as const,
}

export type DssimPackage = typeof dssimPackage
