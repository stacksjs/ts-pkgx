/**
 * **darthsim** - pkgx package
 *
 * @domain `github.com/darthsim`
 *
 * @install `pkgx github.com/darthsim`
 * @name `darthsim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.darthsim
 * // Or access via domain
 * const samePkg = pantry.githubcomdarthsim
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "darthsim"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/darthsim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const darthsimPackage = {
  /**
   * The display name of this package.
   */
  name: 'darthsim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/darthsim' as const,
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
  installCommand: 'pkgx github.com/darthsim' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/darthsim' as const,
}

export type DarthsimPackage = typeof darthsimPackage
