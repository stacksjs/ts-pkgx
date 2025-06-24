/**
 * **gvisor-tap-vsock** - Package from pantry: github.com/containers/gvisor-tap-vsock
 *
 * @domain `github.com/containers/gvisor-tap-vsock`
 *
 * @install `launchpad install github.com/containers/gvisor-tap-vsock`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcontainersgvisortapvsock
 * console.log(pkg.name)        // "gvisor-tap-vsock"
 * console.log(pkg.description) // "Package from pantry: github.com/containers/gvis..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/containers/gvisor-tap-vsock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcontainersgvisortapvsockPackage = {
  /**
   * The display name of this package.
   */
  name: 'gvisor-tap-vsock' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/containers/gvisor-tap-vsock' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/containers/gvisor-tap-vsock' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/containers/gvisor-tap-vsock' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/containers/gvisor-tap-vsock -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/containers/gvisor-tap-vsock' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/containers/gvisor-tap-vsock/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcontainersgvisortapvsockPackage = typeof githubcomcontainersgvisortapvsockPackage
