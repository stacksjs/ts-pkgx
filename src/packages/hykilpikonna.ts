/**
 * **hykilpikonna** - pkgx package
 *
 * @domain `github.com/hykilpikonna`
 *
 * @install `pkgx github.com/hykilpikonna`
 * @name `hykilpikonna`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hykilpikonna
 * // Or access via domain
 * const samePkg = pantry.githubcomhykilpikonna
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hykilpikonna"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hykilpikonna.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hykilpikonnaPackage = {
  /**
   * The display name of this package.
   */
  name: 'hykilpikonna' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hykilpikonna' as const,
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
  installCommand: 'pkgx github.com/hykilpikonna' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/hykilpikonna' as const,
}

export type HykilpikonnaPackage = typeof hykilpikonnaPackage
