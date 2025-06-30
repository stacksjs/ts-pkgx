/**
 * **tokesura** - Package from pantry: github.com/kevinmichaelchen/tokesura
 *
 * @domain `github.com/kevinmichaelchen/tokesura`
 *
 * @install `launchpad install github.com/kevinmichaelchen/tokesura`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkevinmichaelchentokesura
 * console.log(pkg.name)        // "tokesura"
 * console.log(pkg.description) // "Package from pantry: github.com/kevinmichaelche..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kevinmichaelchen/tokesura.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkevinmichaelchentokesuraPackage = {
  /**
   * The display name of this package.
   */
  name: 'tokesura' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kevinmichaelchen/tokesura' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kevinmichaelchen/tokesura' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kevinmichaelchen/tokesura' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kevinmichaelchen/tokesura -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kevinmichaelchen/tokesura' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kevinmichaelchen/tokesura/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkevinmichaelchentokesuraPackage = typeof githubcomkevinmichaelchentokesuraPackage
