/**
 * **rclone.org** - Package from pantry: rclone.org
 *
 * @domain `rclone.org`
 *
 * @install `launchpad install rclone.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rcloneorg
 * console.log(pkg.name)        // "rclone.org"
 * console.log(pkg.description) // "Package from pantry: rclone.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rclone-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rcloneorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rclone.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rclone.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rclone.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rclone.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rclone.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RcloneorgPackage = typeof rcloneorgPackage
