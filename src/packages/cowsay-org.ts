/**
 * **cowsay-org** - pkgx package
 *
 * @domain `github.com/cowsay-org`
 *
 * @install `pkgx github.com/cowsay-org`
 * @name `cowsay-org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cowsayorg
 * // Or access via domain
 * const samePkg = pantry.githubcomcowsayorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cowsay-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cowsay-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cowsayorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cowsay-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cowsay-org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/cowsay-org' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/cowsay-org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/cowsay-org' as const,
}

export type CowsayorgPackage = typeof cowsayorgPackage
