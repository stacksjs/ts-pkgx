/**
 * **neowofetch** - Package from pantry: github.com/hykilpikonna/hyfetch/neowofetch
 *
 * @domain `github.com/hykilpikonna/hyfetch/neowofetch`
 *
 * @install `launchpad install github.com/hykilpikonna/hyfetch/neowofetch`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomhykilpikonnahyfetchneowofetch
 * console.log(pkg.name)        // "neowofetch"
 * console.log(pkg.description) // "Package from pantry: github.com/hykilpikonna/hy..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hykilpikonna/hyfetch/neowofetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomhykilpikonnahyfetchneowofetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'neowofetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hykilpikonna/hyfetch/neowofetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/hykilpikonna/hyfetch/neowofetch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/hykilpikonna/hyfetch/neowofetch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/hykilpikonna/hyfetch/neowofetch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/hykilpikonna/hyfetch/neowofetch' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hykilpikonna/hyfetch/neowofetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomhykilpikonnahyfetchneowofetchPackage = typeof githubcomhykilpikonnahyfetchneowofetchPackage
