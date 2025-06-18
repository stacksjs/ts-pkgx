/**
 * **nvm-sh** - pkgx package
 *
 * @domain `github.com/nvm-sh`
 *
 * @install `pkgx github.com/nvm-sh`
 * @name `nvm-sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nvmsh
 * // Or access via domain
 * const samePkg = pantry.githubcomnvmsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nvm-sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nvm-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nvmshPackage = {
  /**
   * The display name of this package.
   */
  name: 'nvm-sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nvm-sh' as const,
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
  installCommand: 'pkgx github.com/nvm-sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nvm-sh' as const,
}

export type NvmshPackage = typeof nvmshPackage
