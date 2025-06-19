/**
 * **x264** - H.264/AVC encoder
 *
 * @domain `videolan.org/x264`
 * @programs `x264`
 * @version `0.164.3095` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install x264`
 * @name `x264`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.x264
 * // Or access via domain
 * const samePkg = pantry.videolanorgx264
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x264"
 * console.log(pkg.description) // "H.264/AVC encoder"
 * console.log(pkg.programs)    // ["x264"]
 * console.log(pkg.versions[0]) // "0.164.3095" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/x264.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const x264Package = {
  /**
   * The display name of this package.
   */
  name: 'x264' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'videolan.org/x264' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'H.264/AVC encoder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/x264/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install x264' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'x264',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.164.3095',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type X264Package = typeof x264Package
