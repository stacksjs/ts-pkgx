/**
 * **flex** - Package from pantry: github.com/westes/flex
 *
 * @domain `github.com/westes/flex`
 *
 * @install `launchpad install github.com/westes/flex`
 * @dependencies `gnu.org/gettext^0`, `gnu.org/m4^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomwestesflex
 * console.log(pkg.name)        // "flex"
 * console.log(pkg.description) // "Package from pantry: github.com/westes/flex"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/westes/flex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomwestesflexPackage = {
  /**
   * The display name of this package.
   */
  name: 'flex' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/westes/flex' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/westes/flex' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/westes/flex' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/westes/flex -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/westes/flex' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0',
    'gnu.org/m4^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/westes/flex/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomwestesflexPackage = typeof githubcomwestesflexPackage
