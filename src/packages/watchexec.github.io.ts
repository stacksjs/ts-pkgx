/**
 * **watchexec** - Executes commands in response to file modifications
 *
 * @domain `watchexec.github.io`
 * @programs `watchexec`
 * @version `2.3.2` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/watchexec-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) watchexec`
 * @name `watchexec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.watchexec
 * // Or access via domain
 * const samePkg = pantry.watchexecgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "watchexec"
 * console.log(pkg.description) // "Executes commands in response to file modificat..."
 * console.log(pkg.programs)    // ["watchexec"]
 * console.log(pkg.versions[0]) // "2.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/watchexec-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const watchexecPackage = {
  /**
   * The display name of this package.
   */
  name: 'watchexec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'watchexec.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Executes commands in response to file modifications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/watchexec.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) watchexec' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'watchexec',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.2',
    '2.3.1',
    '2.3.0',
    '2.2.1',
    '2.2.0',
    '2.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'watchexec.github.io' as const,
}

export type WatchexecPackage = typeof watchexecPackage
