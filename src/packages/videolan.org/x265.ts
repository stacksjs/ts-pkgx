/**
 * **x265** - Package from pantry: videolan.org/x265
 *
 * @domain `videolan.org/x265`
 *
 * @install `launchpad install videolan.org/x265`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.videolanorgx265
 * console.log(pkg.name)        // "x265"
 * console.log(pkg.description) // "Package from pantry: videolan.org/x265"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/x265.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const videolanorgx265Package = {
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
  description: 'Package from pantry: videolan.org/x265' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install videolan.org/x265' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/x265/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Videolanorgx265Package = typeof videolanorgx265Package
