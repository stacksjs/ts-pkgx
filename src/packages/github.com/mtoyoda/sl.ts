/**
 * **sl** - Package from pantry: github.com/mtoyoda/sl
 *
 * @domain `github.com/mtoyoda/sl`
 *
 * @install `launchpad install github.com/mtoyoda/sl`
 * @dependencies `invisible-island.net/ncurses@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommtoyodasl
 * console.log(pkg.name)        // "sl"
 * console.log(pkg.description) // "Package from pantry: github.com/mtoyoda/sl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mtoyoda/sl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommtoyodaslPackage = {
  /**
   * The display name of this package.
   */
  name: 'sl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mtoyoda/sl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mtoyoda/sl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mtoyoda/sl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mtoyoda/sl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mtoyoda/sl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses@6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mtoyoda/sl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommtoyodaslPackage = typeof githubcommtoyodaslPackage
