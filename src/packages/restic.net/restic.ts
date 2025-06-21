/**
 * **restic** - Package from pantry: restic.net/restic
 *
 * @domain `restic.net/restic`
 *
 * @install `launchpad install restic.net/restic`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.resticnetrestic
 * console.log(pkg.name)        // "restic"
 * console.log(pkg.description) // "Package from pantry: restic.net/restic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/restic-net/restic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const resticnetresticPackage = {
  /**
   * The display name of this package.
   */
  name: 'restic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'restic.net/restic' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: restic.net/restic' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install restic.net/restic' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/restic.net/restic/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ResticnetresticPackage = typeof resticnetresticPackage
