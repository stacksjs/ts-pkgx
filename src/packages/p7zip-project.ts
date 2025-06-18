/**
 * **p7zip-project** - pkgx package
 *
 * @domain `github.com/p7zip-project`
 *
 * @install `pkgx github.com/p7zip-project`
 * @name `p7zip-project`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.p7zipproject
 * // Or access via domain
 * const samePkg = pantry.githubcomp7zipproject
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "p7zip-project"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/p7zip-project.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const p7zipprojectPackage = {
  /**
   * The display name of this package.
   */
  name: 'p7zip-project' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/p7zip-project' as const,
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
  installCommand: 'pkgx github.com/p7zip-project' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/p7zip-project' as const,
}

export type P7zipprojectPackage = typeof p7zipprojectPackage
