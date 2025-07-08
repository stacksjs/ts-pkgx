/**
 * **numactl** - Package from pantry: github.com/numactl/numactl
 *
 * @domain `github.com/numactl/numactl`
 *
 * @install `launchpad install github.com/numactl/numactl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnumactlnumactl
 * console.log(pkg.name)        // "numactl"
 * console.log(pkg.description) // "Package from pantry: github.com/numactl/numactl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/numactl/numactl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnumactlnumactlPackage = {
  /**
   * The display name of this package.
   */
  name: 'numactl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/numactl/numactl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/numactl/numactl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/numactl/numactl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/numactl/numactl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/numactl/numactl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/numactl/numactl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnumactlnumactlPackage = typeof githubcomnumactlnumactlPackage
