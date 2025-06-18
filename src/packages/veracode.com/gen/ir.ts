/**
 * **veracode.com/gen-ir** - pkgx package
 *
 * @domain `veracode.com/gen/ir`
 *
 * @install `pkgx veracode.com/gen-ir`
 * @name `gen-ir`
 * @aliases `veracode.com/gen-ir`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.veracodecomgenir
 * // Or access via domain
 * const samePkg = pantry.veracodecomgenir
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gen-ir"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/veracode-com/gen/ir.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const veracodecomgenirPackage = {
  /**
   * The display name of this package.
   */
  name: 'gen-ir' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'veracode.com/gen/ir' as const,
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
  installCommand: 'pkgx veracode.com/gen-ir' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'veracode.com/gen-ir',
  ] as const,
  fullPath: 'veracode.com/gen-ir' as const,
}

export type VeracodecomgenirPackage = typeof veracodecomgenirPackage
