/**
 * **blacktop** - pkgx package
 *
 * @domain `github.com/blacktop/lporg`
 *
 * @install `launchpad install github.com/blacktop/lporg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomblacktoplporg
 * console.log(pkg.name)        // "blacktop"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/blacktop/lporg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomblacktoplporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'blacktop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/blacktop/lporg' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/blacktop/lporg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/blacktop/lporg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/blacktop/lporg' as const,
}

export type GithubcomblacktoplporgPackage = typeof githubcomblacktoplporgPackage
