/**
 * **bruce** - Package from pantry: github.com/brucedom/bruce
 *
 * @domain `github.com/brucedom/bruce`
 *
 * @install `launchpad install github.com/brucedom/bruce`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombrucedombruce
 * console.log(pkg.name)        // "bruce"
 * console.log(pkg.description) // "Package from pantry: github.com/brucedom/bruce"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/brucedom/bruce.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombrucedombrucePackage = {
  /**
   * The display name of this package.
   */
  name: 'bruce' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/brucedom/bruce' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/brucedom/bruce' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/brucedom/bruce' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/brucedom/bruce -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/brucedom/bruce' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/brucedom/bruce/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcombrucedombrucePackage = typeof githubcombrucedombrucePackage
