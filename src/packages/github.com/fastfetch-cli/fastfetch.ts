/**
 * **fastfetch** - Package from pantry: github.com/fastfetch-cli/fastfetch
 *
 * @domain `github.com/fastfetch-cli/fastfetch`
 *
 * @install `launchpad install github.com/fastfetch-cli/fastfetch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomfastfetchclifastfetch
 * console.log(pkg.name)        // "fastfetch"
 * console.log(pkg.description) // "Package from pantry: github.com/fastfetch-cli/f..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fastfetch-cli/fastfetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomfastfetchclifastfetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastfetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fastfetch-cli/fastfetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/fastfetch-cli/fastfetch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/fastfetch-cli/fastfetch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/fastfetch-cli/fastfetch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/fastfetch-cli/fastfetch' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/fastfetch-cli/fastfetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomfastfetchclifastfetchPackage = typeof githubcomfastfetchclifastfetchPackage
