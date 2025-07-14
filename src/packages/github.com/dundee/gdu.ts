/**
 * **gdu** - Package from pantry: github.com/dundee/gdu
 *
 * @domain `github.com/dundee/gdu`
 *
 * @install `launchpad install github.com/dundee/gdu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdundeegdu
 * console.log(pkg.name)        // "gdu"
 * console.log(pkg.description) // "Package from pantry: github.com/dundee/gdu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dundee/gdu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdundeegduPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dundee/gdu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/dundee/gdu' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/dundee/gdu' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/dundee/gdu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/dundee/gdu' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dundee/gdu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdundeegduPackage = typeof githubcomdundeegduPackage
