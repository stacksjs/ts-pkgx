/**
 * **act** - Package from pantry: github.com/nektos/act
 *
 * @domain `github.com/nektos/act`
 *
 * @install `launchpad install github.com/nektos/act`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnektosact
 * console.log(pkg.name)        // "act"
 * console.log(pkg.description) // "Package from pantry: github.com/nektos/act"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nektos/act.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnektosactPackage = {
  /**
   * The display name of this package.
   */
  name: 'act' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nektos/act' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nektos/act' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nektos/act' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nektos/act -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nektos/act' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nektos/act/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnektosactPackage = typeof githubcomnektosactPackage
