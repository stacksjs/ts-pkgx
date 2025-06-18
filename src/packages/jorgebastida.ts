/**
 * **jorgebastida** - pkgx package
 *
 * @domain `github.com/jorgebastida`
 *
 * @install `pkgx github.com/jorgebastida`
 * @name `jorgebastida`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jorgebastida
 * // Or access via domain
 * const samePkg = pantry.githubcomjorgebastida
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jorgebastida"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jorgebastida.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jorgebastidaPackage = {
  /**
   * The display name of this package.
   */
  name: 'jorgebastida' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jorgebastida' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/jorgebastida' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/jorgebastida' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jorgebastida' as const,
}

export type JorgebastidaPackage = typeof jorgebastidaPackage
