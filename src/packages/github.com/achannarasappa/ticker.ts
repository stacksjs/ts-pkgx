/**
 * **ticker** - Package from pantry: github.com/achannarasappa/ticker
 *
 * @domain `github.com/achannarasappa/ticker`
 *
 * @install `launchpad install github.com/achannarasappa/ticker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomachannarasappaticker
 * console.log(pkg.name)        // "ticker"
 * console.log(pkg.description) // "Package from pantry: github.com/achannarasappa/..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/achannarasappa/ticker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomachannarasappatickerPackage = {
  /**
   * The display name of this package.
   */
  name: 'ticker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/achannarasappa/ticker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/achannarasappa/ticker' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/achannarasappa/ticker' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/achannarasappa/ticker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/achannarasappa/ticker' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/achannarasappa/ticker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomachannarasappatickerPackage = typeof githubcomachannarasappatickerPackage
