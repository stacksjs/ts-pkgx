/**
 * **github.com/denisidoro/navi** - pkgx package
 *
 * @domain `github.com/denisidoro/navi`
 * @version `2.24.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/denisidoro/navi`
 * @companions `github.com/junegunn/fzf`, `crates.io/skim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdenisidoronavi
 * console.log(pkg.name)        // "github.com/denisidoro/navi"
 * console.log(pkg.versions[0]) // "2.24.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/denisidoro/navi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdenisidoronaviPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/denisidoro/navi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/denisidoro/navi' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/denisidoro/navi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/denisidoro/navi' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'github.com/junegunn/fzf',
    'crates.io/skim',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.24.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/denisidoro/navi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/denisidoro/navi' as const,
}

export type GithubcomdenisidoronaviPackage = typeof githubcomdenisidoronaviPackage
