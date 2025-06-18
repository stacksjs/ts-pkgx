/**
 * **sekrit-twc/zimg** - Scaling, colorspace conversion, and dithering library
 *
 * @domain `github.com/sekrit-twc/zimg`
 * @version `3.0.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/sekrit-twc/zimg -- $SHELL -i`
 * @aliases `sekrit-twc/zimg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sekrittwczimg
 * // Or access via domain
 * const samePkg = pantry.githubcomsekrittwczimg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/sekrit-twc/zimg"
 * console.log(pkg.description) // "Scaling, colorspace conversion, and dithering l..."
 * console.log(pkg.versions[0]) // "3.0.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sekrit-twc/zimg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sekrittwczimgPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/sekrit-twc/zimg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sekrit-twc/zimg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Scaling, colorspace conversion, and dithering library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sekrit-twc/zimg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/sekrit-twc/zimg -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.5',
    '3.0.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sekrit-twc/zimg',
  ] as const,
  fullPath: 'github.com/sekrit-twc/zimg' as const,
}

export type SekrittwczimgPackage = typeof sekrittwczimgPackage
