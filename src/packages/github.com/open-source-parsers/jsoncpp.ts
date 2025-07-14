/**
 * **jsoncpp** - Package from pantry: github.com/open-source-parsers/jsoncpp
 *
 * @domain `github.com/open-source-parsers/jsoncpp`
 *
 * @install `launchpad install github.com/open-source-parsers/jsoncpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomopensourceparsersjsoncpp
 * console.log(pkg.name)        // "jsoncpp"
 * console.log(pkg.description) // "Package from pantry: github.com/open-source-par..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/open-source-parsers/jsoncpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomopensourceparsersjsoncppPackage = {
  /**
   * The display name of this package.
   */
  name: 'jsoncpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/open-source-parsers/jsoncpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/open-source-parsers/jsoncpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/open-source-parsers/jsoncpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/open-source-parsers/jsoncpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/open-source-parsers/jsoncpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/open-source-parsers/jsoncpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomopensourceparsersjsoncppPackage = typeof githubcomopensourceparsersjsoncppPackage
