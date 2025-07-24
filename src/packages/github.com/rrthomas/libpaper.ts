/**
 * **libpaper** - Package from pantry: github.com/rrthomas/libpaper
 *
 * @domain `github.com/rrthomas/libpaper`
 *
 * @install `launchpad install github.com/rrthomas/libpaper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomrrthomaslibpaper
 * console.log(pkg.name)        // "libpaper"
 * console.log(pkg.description) // "Package from pantry: github.com/rrthomas/libpaper"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rrthomas/libpaper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrrthomaslibpaperPackage = {
  /**
   * The display name of this package.
   */
  name: 'libpaper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rrthomas/libpaper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/rrthomas/libpaper' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/rrthomas/libpaper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/rrthomas/libpaper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/rrthomas/libpaper' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rrthomas/libpaper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomrrthomaslibpaperPackage = typeof githubcomrrthomaslibpaperPackage
