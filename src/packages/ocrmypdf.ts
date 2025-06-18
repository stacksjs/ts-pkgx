/**
 * **ocrmypdf** - pkgx package
 *
 * @domain `github.com/ocrmypdf`
 *
 * @install `pkgx github.com/ocrmypdf`
 * @name `ocrmypdf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ocrmypdf
 * // Or access via domain
 * const samePkg = pantry.githubcomocrmypdf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ocrmypdf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ocrmypdf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ocrmypdfPackage = {
  /**
   * The display name of this package.
   */
  name: 'ocrmypdf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ocrmypdf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/ocrmypdf' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/ocrmypdf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ocrmypdf' as const,
}

export type OcrmypdfPackage = typeof ocrmypdfPackage
