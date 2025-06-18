/**
 * **pyparsing** - pkgx package
 *
 * @domain `github.com/pyparsing`
 *
 * @install `pkgx github.com/pyparsing`
 * @name `pyparsing`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pyparsing
 * // Or access via domain
 * const samePkg = pantry.githubcompyparsing
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pyparsing"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pyparsing.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyparsingPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyparsing' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pyparsing' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/pyparsing' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/pyparsing' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/pyparsing' as const,
}

export type PyparsingPackage = typeof pyparsingPackage
