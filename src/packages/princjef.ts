/**
 * **princjef** - pkgx package
 *
 * @domain `github.com/princjef`
 *
 * @install `pkgx github.com/princjef`
 * @name `princjef`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.princjef
 * // Or access via domain
 * const samePkg = pantry.githubcomprincjef
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "princjef"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/princjef.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const princjefPackage = {
  /**
   * The display name of this package.
   */
  name: 'princjef' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/princjef' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/princjef' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/princjef' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/princjef' as const,
}

export type PrincjefPackage = typeof princjefPackage
