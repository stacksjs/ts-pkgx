/**
 * **vmaf** - Perceptual video quality assessment based on multi-method fusion.
 *
 * @domain `netflix.com/vmaf`
 * @programs `vmaf`
 * @version `3.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install vmaf`
 * @name `vmaf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vmaf
 * // Or access via domain
 * const samePkg = pantry.netflixcomvmaf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vmaf"
 * console.log(pkg.description) // "Perceptual video quality assessment based on mu..."
 * console.log(pkg.programs)    // ["vmaf"]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netflix-com/vmaf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vmafPackage = {
  /**
   * The display name of this package.
   */
  name: 'vmaf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netflix.com/vmaf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Perceptual video quality assessment based on multi-method fusion.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/netflix.com/vmaf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vmaf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vmaf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
    '2.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type VmafPackage = typeof vmafPackage
