/**
 * **fastfetch/cli-fastfetch** - pkgx package
 *
 * @domain `github.com/fastfetch/cli-fastfetch`
 *
 * @install `pkgx github.com/fastfetch/cli-fastfetch`
 * @aliases `fastfetch/cli-fastfetch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fastfetchclifastfetch
 * // Or access via domain
 * const samePkg = pantry.githubcomfastfetchclifastfetch
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fastfetch"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fastfetch/cli-fastfetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastfetchclifastfetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastfetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fastfetch/cli-fastfetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/fastfetch/cli-fastfetch' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/fastfetch/cli-fastfetch' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fastfetch/cli-fastfetch',
  ] as const,
  fullPath: 'github.com/fastfetch/cli-fastfetch' as const,
}

export type FastfetchclifastfetchPackage = typeof fastfetchclifastfetchPackage
