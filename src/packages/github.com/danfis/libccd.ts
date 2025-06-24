/**
 * **libccd** - Package from pantry: github.com/danfis/libccd
 *
 * @domain `github.com/danfis/libccd`
 *
 * @install `launchpad install github.com/danfis/libccd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdanfislibccd
 * console.log(pkg.name)        // "libccd"
 * console.log(pkg.description) // "Package from pantry: github.com/danfis/libccd"
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
  description: 'Package from pantry: github.com/danfis/libccd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/danfis/libccd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/danfis/libccd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/danfis/libccd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/danfis/libccd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdanfislibccdPackage = typeof githubcomdanfislibccdPackage
