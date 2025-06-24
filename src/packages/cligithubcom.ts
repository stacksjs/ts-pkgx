/**
 * **cli.github.com** - Package from pantry: cli.github.com
 *
 * @domain `cli.github.com`
 *
 * @install `launchpad install cli.github.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cligithubcom
 * console.log(pkg.name)        // "cli.github.com"
 * console.log(pkg.description) // "Package from pantry: cli.github.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cli-github-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cligithubcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli.github.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cli.github.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cli.github.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cli.github.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cli.github.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cli.github.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cli.github.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CligithubcomPackage = typeof cligithubcomPackage
