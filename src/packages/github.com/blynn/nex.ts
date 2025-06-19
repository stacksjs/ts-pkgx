/**
 * **nex** - 44BSD re-implementation of vi
 *
 * @domain `github.com/blynn/nex`
 * @programs `nex`
 * @version `2021.3.30` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nex`
 * @name `nex`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nex
 * // Or access via domain
 * const samePkg = pantry.githubcomblynnnex
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nex"
 * console.log(pkg.description) // "44BSD re-implementation of vi"
 * console.log(pkg.programs)    // ["nex"]
 * console.log(pkg.versions[0]) // "2021.3.30" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/blynn/nex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nexPackage = {
  /**
   * The display name of this package.
   */
  name: 'nex' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/blynn/nex' as const,
  /**
   * Brief description of what this package does.
   */
  description: '44BSD re-implementation of vi' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blynn/nex/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nex' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nex',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2021.3.30',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type NexPackage = typeof nexPackage
