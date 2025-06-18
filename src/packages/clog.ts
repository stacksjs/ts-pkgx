/**
 * **clog** - Colorized pattern-matching log tail utility
 *
 * @domain `clog-tool.github.io`
 * @programs `clog`
 * @version `0.9.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) clog`
 * @name `clog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.clog
 * // Or access via domain
 * const samePkg = pantry.clogtoolgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "clog"
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
  name: 'clog' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) clog' as const,
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
  aliases: [] as const,
  fullPath: 'clog-tool.github.io' as const,
}

export type ClogPackage = typeof clogPackage
