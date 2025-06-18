/**
 * **github.com/MaestroError/heif-converter-image** - pkgx package
 *
 * @domain `github.com/MaestroError/heif/converter-image`
 *
 * @install `pkgx github.com/MaestroError/heif-converter-image`
 * @aliases `github.com/MaestroError/heif-converter-image`, `MaestroError/heif-converter-image`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomMaestroErrorheifconverterimage
 * // Or access via domain
 * const samePkg = pantry.githubcommaestroerrorheifconverterimage
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "MaestroError"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MaestroError/heif/converter-image.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomMaestroErrorheifconverterimagePackage = {
  /**
   * The display name of this package.
   */
  name: 'MaestroError' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MaestroError/heif/converter-image' as const,
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
  installCommand: 'pkgx github.com/MaestroError/heif-converter-image' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/MaestroError/heif-converter-image',
    'MaestroError/heif-converter-image',
  ] as const,
  fullPath: 'github.com/MaestroError/heif-converter-image' as const,
}

export type GithubcomMaestroErrorheifconverterimagePackage = typeof githubcomMaestroErrorheifconverterimagePackage
