/**
 * **nektos** - pkgx package
 *
 * @domain `github.com/nektos`
 *
 * @install `pkgx github.com/nektos`
 * @name `nektos`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nektos
 * // Or access via domain
 * const samePkg = pantry.githubcomnektos
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nektos"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nektos.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nektosPackage = {
  /**
   * The display name of this package.
   */
  name: 'nektos' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nektos' as const,
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
  installCommand: 'pkgx github.com/nektos' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nektos' as const,
}

export type NektosPackage = typeof nektosPackage
