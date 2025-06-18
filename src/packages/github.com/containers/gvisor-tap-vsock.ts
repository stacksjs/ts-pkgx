/**
 * **containers/gvisor-tap-vsock** - A new network stack based on gVisor
 *
 * @domain `github.com/containers/gvisor-tap-vsock`
 * @programs `gvproxy`, `qemu-wrapper`
 * @version `0.8.6` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/containers/gvisor-tap-vsock -- $SHELL -i`
 * @aliases `containers/gvisor-tap-vsock`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.containersgvisortapvsock
 * // Or access via domain
 * const samePkg = pantry.githubcomcontainersgvisortapvsock
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/containers/gvisor-tap-vsock"
 * console.log(pkg.description) // "A new network stack based on gVisor"
 * console.log(pkg.programs)    // ["gvproxy", "qemu-wrapper"]
 * console.log(pkg.versions[0]) // "0.8.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/containers/gvisor-tap-vsock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const containersgvisortapvsockPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/containers/gvisor-tap-vsock' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/containers/gvisor-tap-vsock' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A new network stack based on gVisor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/containers/gvisor-tap-vsock/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/containers/gvisor-tap-vsock -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gvproxy',
    'qemu-wrapper',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.6',
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.5',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.2',
    '0.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'containers/gvisor-tap-vsock',
  ] as const,
  fullPath: 'github.com/containers/gvisor-tap-vsock' as const,
}

export type ContainersgvisortapvsockPackage = typeof containersgvisortapvsockPackage
