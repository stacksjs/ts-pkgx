/**
 * **charliermarsh** - pkgx package
 *
 * @domain `github.com/charliermarsh`
 *
 * @install `pkgx github.com/charliermarsh`
 * @name `charliermarsh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.charliermarsh
 * // Or access via domain
 * const samePkg = pantry.githubcomcharliermarsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "charliermarsh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/charliermarsh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charliermarshPackage = {
  /**
   * The display name of this package.
   */
  name: 'charliermarsh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/charliermarsh' as const,
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
  installCommand: 'pkgx github.com/charliermarsh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/charliermarsh' as const,
}

export type CharliermarshPackage = typeof charliermarshPackage
