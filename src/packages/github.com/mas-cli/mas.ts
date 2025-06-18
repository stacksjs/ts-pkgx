/**
 * **mas** - Package from pantry: github.com/mas-cli/mas
 *
 * @domain `github.com/mas-cli/mas`
 *
 * @install `launchpad install github.com/mas-cli/mas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommasclimas
 * console.log(pkg.name)        // "mas"
 * console.log(pkg.description) // "Package from pantry: github.com/mas-cli/mas"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mas-cli/mas.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommasclimasPackage = {
  /**
   * The display name of this package.
   */
  name: 'mas' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mas-cli/mas' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mas-cli/mas' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/mas-cli/mas' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mas-cli/mas/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommasclimasPackage = typeof githubcommasclimasPackage
