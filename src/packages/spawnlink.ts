/**
 * **spawn.link** - Package from pantry: spawn.link
 *
 * @domain `spawn.link`
 *
 * @install `launchpad install spawn.link`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.spawnlink
 * console.log(pkg.name)        // "spawn.link"
 * console.log(pkg.description) // "Package from pantry: spawn.link"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/spawn-link.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spawnlinkPackage = {
  /**
   * The display name of this package.
   */
  name: 'spawn.link' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'spawn.link' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: spawn.link' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install spawn.link' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/spawn.link/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SpawnlinkPackage = typeof spawnlinkPackage
