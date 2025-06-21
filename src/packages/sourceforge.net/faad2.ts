/**
 * **faad2** - Package from pantry: sourceforge.net/faad2
 *
 * @domain `sourceforge.net/faad2`
 *
 * @install `launchpad install sourceforge.net/faad2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetfaad2
 * console.log(pkg.name)        // "faad2"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/faad2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/faad2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetfaad2Package = {
  /**
   * The display name of this package.
   */
  name: 'faad2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/faad2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/faad2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/faad2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/faad2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Sourceforgenetfaad2Package = typeof sourceforgenetfaad2Package
