/**
 * **clog** - Colorized pattern-matching log tail utility
 *
 * @domain `clog-tool.github.io`
 * @programs `clog`
 * @version `0.9.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install clog`
 * @aliases `clog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.clog
 * // Or access via domain
 * const samePkg = pantry.clogtoolgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "clog-tool.github.io"
 * console.log(pkg.description) // "Colorized pattern-matching log tail utility"
 * console.log(pkg.programs)    // ["clog"]
 * console.log(pkg.versions[0]) // "0.9.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/clog-tool-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const clogPackage = {
  /**
   * The display name of this package.
   */
  name: 'clog-tool.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'clog-tool.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Colorized pattern-matching log tail utility' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/clog-tool.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install clog' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'clog',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'clog',
  ] as const,
}

export type ClogPackage = typeof clogPackage
