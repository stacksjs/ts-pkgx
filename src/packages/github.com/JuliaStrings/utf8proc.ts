/**
 * **github.com/juliastrings/utf8proc** - a clean C library for processing UTF-8 Unicode data
 *
 * @domain `github.com/JuliaStrings/utf8proc`
 * @version `2.10.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/JuliaStrings/utf8proc -- $SHELL -i`
 * @aliases `github.com/juliastrings/utf8proc`, `JuliaStrings/utf8proc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomjuliastringsutf8proc
 * // Or access via domain
 * const samePkg = pantry.githubcomjuliastringsutf8proc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/JuliaStrings/utf8proc"
 * console.log(pkg.description) // "a clean C library for processing UTF-8 Unicode ..."
 * console.log(pkg.versions[0]) // "2.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/JuliaStrings/utf8proc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjuliastringsutf8procPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/JuliaStrings/utf8proc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/JuliaStrings/utf8proc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'a clean C library for processing UTF-8 Unicode data' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/JuliaStrings/utf8proc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/JuliaStrings/utf8proc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.10.0',
    '2.9.0',
    '2.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/juliastrings/utf8proc',
    'JuliaStrings/utf8proc',
  ] as const,
  fullPath: 'github.com/JuliaStrings/utf8proc' as const,
}

export type Githubcomjuliastringsutf8procPackage = typeof githubcomjuliastringsutf8procPackage
