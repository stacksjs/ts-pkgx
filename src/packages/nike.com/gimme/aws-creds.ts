/**
 * **nike.com/gimme-aws-creds** - pkgx package
 *
 * @domain `nike.com/gimme/aws-creds`
 *
 * @install `pkgx nike.com/gimme-aws-creds`
 * @name `gimme-aws-creds`
 * @aliases `nike.com/gimme-aws-creds`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nikecomgimmeawscreds
 * // Or access via domain
 * const samePkg = pantry.nikecomgimmeawscreds
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gimme-aws-creds"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nike-com/gimme/aws-creds.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nikecomgimmeawscredsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gimme-aws-creds' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nike.com/gimme/aws-creds' as const,
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
  installCommand: 'pkgx nike.com/gimme-aws-creds' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nike.com/gimme-aws-creds',
  ] as const,
  fullPath: 'nike.com/gimme-aws-creds' as const,
}

export type NikecomgimmeawscredsPackage = typeof nikecomgimmeawscredsPackage
