/**
 * **aws-whoami-golang** - Package from pantry: github.com/benkehoe/aws-whoami-golang
 *
 * @domain `github.com/benkehoe/aws-whoami-golang`
 *
 * @install `launchpad install github.com/benkehoe/aws-whoami-golang`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombenkehoeawswhoamigolang
 * console.log(pkg.name)        // "aws-whoami-golang"
 * console.log(pkg.description) // "Package from pantry: github.com/benkehoe/aws-wh..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benkehoe/aws-whoami-golang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombenkehoeawswhoamigolangPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-whoami-golang' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benkehoe/aws-whoami-golang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/benkehoe/aws-whoami-golang' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/benkehoe/aws-whoami-golang' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/benkehoe/aws-whoami-golang -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/benkehoe/aws-whoami-golang' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/benkehoe/aws-whoami-golang/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcombenkehoeawswhoamigolangPackage = typeof githubcombenkehoeawswhoamigolangPackage
