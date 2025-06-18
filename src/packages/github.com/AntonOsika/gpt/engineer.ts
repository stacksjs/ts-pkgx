/**
 * **github.com/AntonOsika/gpt-engineer** - pkgx package
 *
 * @domain `github.com/AntonOsika/gpt/engineer`
 *
 * @install `pkgx github.com/AntonOsika/gpt-engineer`
 * @aliases `github.com/AntonOsika/gpt-engineer`, `AntonOsika/gpt-engineer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomAntonOsikagptengineer
 * // Or access via domain
 * const samePkg = pantry.githubcomantonosikagptengineer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AntonOsika"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AntonOsika/gpt/engineer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomAntonOsikagptengineerPackage = {
  /**
   * The display name of this package.
   */
  name: 'AntonOsika' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AntonOsika/gpt/engineer' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/AntonOsika/gpt-engineer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/AntonOsika/gpt-engineer',
    'AntonOsika/gpt-engineer',
  ] as const,
  fullPath: 'github.com/AntonOsika/gpt-engineer' as const,
}

export type GithubcomAntonOsikagptengineerPackage = typeof githubcomAntonOsikagptengineerPackage
