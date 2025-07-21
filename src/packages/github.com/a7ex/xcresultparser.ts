/**
 * **xcresultparser** - Package from pantry: github.com/a7ex/xcresultparser
 *
 * @domain `github.com/a7ex/xcresultparser`
 *
 * @install `launchpad install github.com/a7ex/xcresultparser`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcoma7exxcresultparser
 * console.log(pkg.name)        // "xcresultparser"
 * console.log(pkg.description) // "Package from pantry: github.com/a7ex/xcresultpa..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/a7ex/xcresultparser.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcoma7exxcresultparserPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcresultparser' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/a7ex/xcresultparser' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/a7ex/xcresultparser' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/a7ex/xcresultparser' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/a7ex/xcresultparser -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/a7ex/xcresultparser' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/a7ex/xcresultparser/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcoma7exxcresultparserPackage = typeof githubcoma7exxcresultparserPackage
