/**
 * **checkmake** - Package from pantry: github.com/mrtazz/checkmake
 *
 * @domain `github.com/mrtazz/checkmake`
 *
 * @install `launchpad install github.com/mrtazz/checkmake`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommrtazzcheckmake
 * console.log(pkg.name)        // "checkmake"
 * console.log(pkg.description) // "Package from pantry: github.com/mrtazz/checkmake"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mrtazz/checkmake.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommrtazzcheckmakePackage = {
  /**
   * The display name of this package.
   */
  name: 'checkmake' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mrtazz/checkmake' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mrtazz/checkmake' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mrtazz/checkmake' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mrtazz/checkmake -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mrtazz/checkmake' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mrtazz/checkmake/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommrtazzcheckmakePackage = typeof githubcommrtazzcheckmakePackage
