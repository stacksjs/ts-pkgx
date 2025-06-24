/**
 * **zap** - Package from pantry: github.com/keith/zap
 *
 * @domain `github.com/keith/zap`
 *
 * @install `launchpad install github.com/keith/zap`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkeithzap
 * console.log(pkg.name)        // "zap"
 * console.log(pkg.description) // "Package from pantry: github.com/keith/zap"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/keith/zap.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkeithzapPackage = {
  /**
   * The display name of this package.
   */
  name: 'zap' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/keith/zap' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/keith/zap' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/keith/zap' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/keith/zap -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/keith/zap' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/keith/zap/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkeithzapPackage = typeof githubcomkeithzapPackage
