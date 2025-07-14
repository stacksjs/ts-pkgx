/**
 * **llrt** - Package from pantry: github.com/awslabs/llrt
 *
 * @domain `github.com/awslabs/llrt`
 *
 * @install `launchpad install github.com/awslabs/llrt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomawslabsllrt
 * console.log(pkg.name)        // "llrt"
 * console.log(pkg.description) // "Package from pantry: github.com/awslabs/llrt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/llrt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawslabsllrtPackage = {
  /**
   * The display name of this package.
   */
  name: 'llrt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/llrt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/awslabs/llrt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/awslabs/llrt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/awslabs/llrt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/awslabs/llrt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/llrt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomawslabsllrtPackage = typeof githubcomawslabsllrtPackage
