/**
 * **dasel** - Package from pantry: github.com/TomWright/dasel
 *
 * @domain `github.com/TomWright/dasel`
 *
 * @install `launchpad install github.com/TomWright/dasel`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtomwrightdasel
 * console.log(pkg.name)        // "dasel"
 * console.log(pkg.description) // "Package from pantry: github.com/TomWright/dasel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/TomWright/dasel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtomwrightdaselPackage = {
  /**
   * The display name of this package.
   */
  name: 'dasel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/TomWright/dasel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/TomWright/dasel' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/TomWright/dasel' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/TomWright/dasel -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/TomWright/dasel' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/TomWright/dasel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomtomwrightdaselPackage = typeof githubcomtomwrightdaselPackage
