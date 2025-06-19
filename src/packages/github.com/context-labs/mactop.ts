/**
 * **mactop** - Apple Silicon Monitor Top written in Golang
 *
 * @domain `github.com/context-labs/mactop`
 * @programs `mactop`
 * @version `0.2.3` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mactop`
 * @name `mactop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mactop
 * // Or access via domain
 * const samePkg = pantry.githubcomcontextlabsmactop
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mactop"
 * console.log(pkg.description) // "Apple Silicon Monitor Top written in Golang"
 * console.log(pkg.programs)    // ["mactop"]
 * console.log(pkg.versions[0]) // "0.2.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/context-labs/mactop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mactopPackage = {
  /**
   * The display name of this package.
   */
  name: 'mactop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/context-labs/mactop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Apple Silicon Monitor Top written in Golang' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/context-labs/mactop/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mactop' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mactop',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.3',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.9',
    '0.1.8',
    '0.1.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MactopPackage = typeof mactopPackage
