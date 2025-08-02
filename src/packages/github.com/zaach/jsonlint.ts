/**
 * **jsonlint** - Package from pantry: github.com/zaach/jsonlint
 *
 * @domain `github.com/zaach/jsonlint`
 *
 * @install `launchpad install github.com/zaach/jsonlint`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzaachjsonlint
 * console.log(pkg.name)        // "jsonlint"
 * console.log(pkg.description) // "Package from pantry: github.com/zaach/jsonlint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zaach/jsonlint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzaachjsonlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'jsonlint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zaach/jsonlint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/zaach/jsonlint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/zaach/jsonlint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/zaach/jsonlint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/zaach/jsonlint' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zaach/jsonlint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomzaachjsonlintPackage = typeof githubcomzaachjsonlintPackage
