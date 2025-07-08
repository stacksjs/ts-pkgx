/**
 * **gollum** - Package from pantry: github.com/gollum/gollum
 *
 * @domain `github.com/gollum/gollum`
 *
 * @install `launchpad install github.com/gollum/gollum`
 * @dependencies `ruby-lang.org^3.1`, `rubygems.org~3.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgollumgollum
 * console.log(pkg.name)        // "gollum"
 * console.log(pkg.description) // "Package from pantry: github.com/gollum/gollum"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gollum/gollum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgollumgollumPackage = {
  /**
   * The display name of this package.
   */
  name: 'gollum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gollum/gollum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/gollum/gollum' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/gollum/gollum' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/gollum/gollum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/gollum/gollum' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org~3.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gollum/gollum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgollumgollumPackage = typeof githubcomgollumgollumPackage
