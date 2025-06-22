/**
 * **x265** - H.265/HEVC encoder
 *
 * @domain `videolan.org/x265`
 * @programs `x265`
 * @version `4.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install x265`
 * @name `x265`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.x265
 * // Or access via domain
 * const samePkg = pantry.videolanorgx265
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x265"
 * console.log(pkg.description) // "H.265/HEVC encoder"
 * console.log(pkg.programs)    // ["x265"]
 * console.log(pkg.versions[0]) // "4.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/x265.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const x265Package = {
  /**
   * The display name of this package.
   */
  name: 'x265' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'videolan.org/x265' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'H.265/HEVC encoder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/x265/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x265' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'x265',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.1.0',
    '3.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) x265 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x265' as const,
}

export type X265Package = typeof x265Package
