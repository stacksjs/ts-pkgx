/**
 * **lego** - Package from pantry: github.com/go-acme/lego
 *
 * @domain `github.com/go-acme/lego`
 *
 * @install `launchpad install github.com/go-acme/lego`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgoacmelego
 * console.log(pkg.name)        // "lego"
 * console.log(pkg.description) // "Package from pantry: github.com/go-acme/lego"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/go-acme/lego.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgoacmelegoPackage = {
  /**
   * The display name of this package.
   */
  name: 'lego' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/go-acme/lego' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/go-acme/lego' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/go-acme/lego' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/go-acme/lego -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/go-acme/lego' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/go-acme/lego/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgoacmelegoPackage = typeof githubcomgoacmelegoPackage
