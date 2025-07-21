/**
 * **sasqwatch** - Package from pantry: github.com/fabio42/sasqwatch
 *
 * @domain `github.com/fabio42/sasqwatch`
 *
 * @install `launchpad install github.com/fabio42/sasqwatch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomfabio42sasqwatch
 * console.log(pkg.name)        // "sasqwatch"
 * console.log(pkg.description) // "Package from pantry: github.com/fabio42/sasqwatch"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fabio42/sasqwatch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomfabio42sasqwatchPackage = {
  /**
   * The display name of this package.
   */
  name: 'sasqwatch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fabio42/sasqwatch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/fabio42/sasqwatch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/fabio42/sasqwatch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/fabio42/sasqwatch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/fabio42/sasqwatch' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/fabio42/sasqwatch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomfabio42sasqwatchPackage = typeof githubcomfabio42sasqwatchPackage
