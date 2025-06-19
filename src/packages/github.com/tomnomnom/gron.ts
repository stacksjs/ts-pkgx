/**
 * **gron** - Make JSON greppable!
 *
 * @domain `github.com/tomnomnom/gron`
 * @programs `gron`
 * @version `0.7.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gron`
 * @name `gron`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gron
 * // Or access via domain
 * const samePkg = pantry.githubcomtomnomnomgron
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gron"
 * console.log(pkg.description) // "Make JSON greppable!"
 * console.log(pkg.programs)    // ["gron"]
 * console.log(pkg.versions[0]) // "0.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tomnomnom/gron.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gronPackage = {
  /**
   * The display name of this package.
   */
  name: 'gron' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tomnomnom/gron' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Make JSON greppable!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tomnomnom/gron/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gron' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gron',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GronPackage = typeof gronPackage
