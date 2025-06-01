/**
 * **uriparse** - :hocho: Strictly RFC 3986 compliant URI parsing and handling library written in C89; moved from SourceForge to GitHub
 *
 * @domain `uriparser.github.io`
 * @programs `uriparse`
 * @version `0.9.8` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/uriparser-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) uriparse`
 * @aliases `uriparse`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.uriparse
 * // Or access via domain
 * const samePkg = pantry.uriparsergithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "uriparse"
 * console.log(pkg.description) // ":hocho: Strictly RFC 3986 compliant URI parsing..."
 * console.log(pkg.programs)    // ["uriparse"]
 * console.log(pkg.versions[0]) // "0.9.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/uriparser-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const uriparsePackage = {
  /**
   * The display name of this package.
   */
  name: 'uriparse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'uriparser.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':hocho: Strictly RFC 3986 compliant URI parsing and handling library written in C89; moved from SourceForge to GitHub' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/uriparser.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) uriparse' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'uriparse',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.8',
    '0.9.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'uriparse',
  ] as const,
  fullPath: 'uriparser.github.io' as const,
}

export type UriparsePackage = typeof uriparsePackage
