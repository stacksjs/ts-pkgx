/**
 * **zimg** - Scaling, colorspace conversion, and dithering library
 *
 * @domain `github.com/sekrit-twc/zimg`
 * @version `3.0.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/sekrit-twc/zimg -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsekrittwczimg
 * console.log(pkg.name)        // "zimg"
 * console.log(pkg.description) // "Scaling, colorspace conversion, and dithering l..."
 * console.log(pkg.versions[0]) // "3.0.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sekrit-twc/zimg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsekrittwczimgPackage = {
  /**
   * The display name of this package.
   */
  name: 'zimg' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
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
  aliases: [] as const,
}

export type GithubcomsekrittwczimgPackage = typeof githubcomsekrittwczimgPackage
