/**
 * **cookiecutter** - pkgx package
 *
 * @domain `github.com/cookiecutter`
 *
 * @install `pkgx github.com/cookiecutter`
 * @name `cookiecutter`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cookiecutter
 * // Or access via domain
 * const samePkg = pantry.githubcomcookiecutter
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cookiecutter"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cookiecutter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cookiecutterPackage = {
  /**
   * The display name of this package.
   */
  name: 'cookiecutter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cookiecutter' as const,
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
  installCommand: 'pkgx github.com/cookiecutter' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/cookiecutter' as const,
}

export type CookiecutterPackage = typeof cookiecutterPackage
