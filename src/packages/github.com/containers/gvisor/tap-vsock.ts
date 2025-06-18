/**
 * **github.com/containers/gvisor-tap-vsock** - pkgx package
 *
 * @domain `github.com/containers/gvisor/tap-vsock`
 *
 * @install `pkgx github.com/containers/gvisor-tap-vsock`
 * @aliases `github.com/containers/gvisor-tap-vsock`, `containers/gvisor-tap-vsock`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcontainersgvisortapvsock
 * // Or access via domain
 * const samePkg = pantry.githubcomcontainersgvisortapvsock
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "containers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/containers/gvisor/tap-vsock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcontainersgvisortapvsockPackage = {
  /**
   * The display name of this package.
   */
  name: 'containers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/containers/gvisor/tap-vsock' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/containers/gvisor-tap-vsock' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/containers/gvisor-tap-vsock',
    'containers/gvisor-tap-vsock',
  ] as const,
  fullPath: 'github.com/containers/gvisor-tap-vsock' as const,
}

export type GithubcomcontainersgvisortapvsockPackage = typeof githubcomcontainersgvisortapvsockPackage
