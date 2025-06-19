/**
 * **libccd** - Library for collision detection between two convex shapes
 *
 * @domain `github.com/danfis/libccd`
 * @version `2.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/danfis/libccd -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdanfislibccd
 * console.log(pkg.name)        // "libccd"
 * console.log(pkg.description) // "Library for collision detection between two con..."
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/danfis/libccd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdanfislibccdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libccd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/danfis/libccd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library for collision detection between two convex shapes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/danfis/libccd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/danfis/libccd -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomdanfislibccdPackage = typeof githubcomdanfislibccdPackage
