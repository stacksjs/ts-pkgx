/**
 * **lefthook** - Package from pantry: github.com/evilmartians/lefthook
 *
 * @domain `github.com/evilmartians/lefthook`
 *
 * @install `launchpad install github.com/evilmartians/lefthook`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomevilmartianslefthook
 * console.log(pkg.name)        // "lefthook"
 * console.log(pkg.description) // "Package from pantry: github.com/evilmartians/le..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/evilmartians/lefthook.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomevilmartianslefthookPackage = {
  /**
   * The display name of this package.
   */
  name: 'lefthook' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/evilmartians/lefthook' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/evilmartians/lefthook' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/evilmartians/lefthook' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/evilmartians/lefthook -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/evilmartians/lefthook' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/evilmartians/lefthook/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomevilmartianslefthookPackage = typeof githubcomevilmartianslefthookPackage
