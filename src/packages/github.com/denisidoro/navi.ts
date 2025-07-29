/**
 * **navi** - Package from pantry: github.com/denisidoro/navi
 *
 * @domain `github.com/denisidoro/navi`
 *
 * @install `launchpad install github.com/denisidoro/navi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdenisidoronavi
 * console.log(pkg.name)        // "navi"
 * console.log(pkg.description) // "Package from pantry: github.com/denisidoro/navi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/denisidoro/navi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdenisidoronaviPackage = {
  /**
   * The display name of this package.
   */
  name: 'navi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/denisidoro/navi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/denisidoro/navi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/denisidoro/navi' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/denisidoro/navi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/denisidoro/navi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/denisidoro/navi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdenisidoronaviPackage = typeof githubcomdenisidoronaviPackage
