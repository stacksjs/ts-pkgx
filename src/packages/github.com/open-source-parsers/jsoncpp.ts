/**
 * **github.com/open-source-parsers/jsoncpp** - A C++ library for interacting with JSON.
 *
 * @domain `github.com/open-source-parsers/jsoncpp`
 * @version `1.9.6` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/open-source-parsers/jsoncpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomopensourceparsersjsoncpp
 * console.log(pkg.name)        // "github.com/open-source-parsers/jsoncpp"
 * console.log(pkg.description) // "A C++ library for interacting with JSON."
 * console.log(pkg.versions[0]) // "1.9.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/open-source-parsers/jsoncpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomopensourceparsersjsoncppPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/open-source-parsers/jsoncpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/open-source-parsers/jsoncpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A C++ library for interacting with JSON.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/open-source-parsers/jsoncpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/open-source-parsers/jsoncpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.9.6',
    '1.9.5',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/open-source-parsers/jsoncpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/open-source-parsers/jsoncpp' as const,
}

export type GithubcomopensourceparsersjsoncppPackage = typeof githubcomopensourceparsersjsoncppPackage
