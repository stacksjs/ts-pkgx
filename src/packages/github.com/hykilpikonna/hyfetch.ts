/**
 * **hyfetch** - Package from pantry: github.com/hykilpikonna/hyfetch
 *
 * @domain `github.com/hykilpikonna/hyfetch`
 *
 * @install `launchpad install github.com/hykilpikonna/hyfetch`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomhykilpikonnahyfetch
 * console.log(pkg.name)        // "hyfetch"
 * console.log(pkg.description) // "Package from pantry: github.com/hykilpikonna/hy..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hykilpikonna/hyfetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomhykilpikonnahyfetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'hyfetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hykilpikonna/hyfetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/hykilpikonna/hyfetch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/hykilpikonna/hyfetch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/hykilpikonna/hyfetch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/hykilpikonna/hyfetch' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hykilpikonna/hyfetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomhykilpikonnahyfetchPackage = typeof githubcomhykilpikonnahyfetchPackage
