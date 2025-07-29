/**
 * **nnn** - Package from pantry: github.com/jarun/nnn
 *
 * @domain `github.com/jarun/nnn`
 *
 * @install `launchpad install github.com/jarun/nnn`
 * @dependencies `invisible-island.net/ncurses@6`, `gnu.org/readline@8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjarunnnn
 * console.log(pkg.name)        // "nnn"
 * console.log(pkg.description) // "Package from pantry: github.com/jarun/nnn"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jarun/nnn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjarunnnnPackage = {
  /**
   * The display name of this package.
   */
  name: 'nnn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jarun/nnn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jarun/nnn' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jarun/nnn' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jarun/nnn -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jarun/nnn' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses@6',
    'gnu.org/readline@8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jarun/nnn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjarunnnnPackage = typeof githubcomjarunnnnPackage
