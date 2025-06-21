/**
 * **x264** - Package from pantry: videolan.org/x264
 *
 * @domain `videolan.org/x264`
 *
 * @install `launchpad install videolan.org/x264`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.videolanorgx264
 * console.log(pkg.name)        // "x264"
 * console.log(pkg.description) // "Package from pantry: videolan.org/x264"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/x264.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const videolanorgx264Package = {
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
  description: 'Package from pantry: videolan.org/x264' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install videolan.org/x264' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/x264/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Videolanorgx264Package = typeof videolanorgx264Package
