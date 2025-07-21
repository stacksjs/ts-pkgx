/**
 * **eget** - Package from pantry: github.com/zyedidia/eget
 *
 * @domain `github.com/zyedidia/eget`
 *
 * @install `launchpad install github.com/zyedidia/eget`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzyedidiaeget
 * console.log(pkg.name)        // "eget"
 * console.log(pkg.description) // "Package from pantry: github.com/zyedidia/eget"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zyedidia/eget.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzyedidiaegetPackage = {
  /**
   * The display name of this package.
   */
  name: 'eget' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zyedidia/eget' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/zyedidia/eget' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/zyedidia/eget' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/zyedidia/eget -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/zyedidia/eget' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zyedidia/eget/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomzyedidiaegetPackage = typeof githubcomzyedidiaegetPackage
