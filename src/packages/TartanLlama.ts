/**
 * **TartanLlama** - pkgx package
 *
 * @domain `github.com/TartanLlama`
 *
 * @install `pkgx github.com/TartanLlama`
 * @name `TartanLlama`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.TartanLlama
 * // Or access via domain
 * const samePkg = pantry.githubcomtartanllama
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "TartanLlama"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/TartanLlama.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tartanLlamaPackage = {
  /**
   * The display name of this package.
   */
  name: 'TartanLlama' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/TartanLlama' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/TartanLlama' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/TartanLlama' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/TartanLlama' as const,
}

export type TartanLlamaPackage = typeof tartanLlamaPackage
