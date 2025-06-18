/**
 * **ZZROTDesign** - pkgx package
 *
 * @domain `github.com/ZZROTDesign`
 *
 * @install `pkgx github.com/ZZROTDesign`
 * @name `ZZROTDesign`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ZZROTDesign
 * // Or access via domain
 * const samePkg = pantry.githubcomzzrotdesign
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ZZROTDesign"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ZZROTDesign.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zZROTDesignPackage = {
  /**
   * The display name of this package.
   */
  name: 'ZZROTDesign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ZZROTDesign' as const,
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
  installCommand: 'pkgx github.com/ZZROTDesign' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ZZROTDesign' as const,
}

export type ZZROTDesignPackage = typeof zZROTDesignPackage
