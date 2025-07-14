/**
 * **sup** - Package from pantry: github.com/pressly/sup
 *
 * @domain `github.com/pressly/sup`
 *
 * @install `launchpad install github.com/pressly/sup`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompresslysup
 * console.log(pkg.name)        // "sup"
 * console.log(pkg.description) // "Package from pantry: github.com/pressly/sup"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pressly/sup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompresslysupPackage = {
  /**
   * The display name of this package.
   */
  name: 'sup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pressly/sup' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/pressly/sup' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/pressly/sup' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/pressly/sup -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/pressly/sup' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pressly/sup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompresslysupPackage = typeof githubcompresslysupPackage
