/**
 * **podman.io** - Package from pantry: podman.io
 *
 * @domain `podman.io`
 *
 * @install `launchpad install podman.io`
 * @dependencies `qemu.org`, `github.com/containers/gvisor-tap-vsock`, `github.com/crc-org/vfkit`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.podmanio
 * console.log(pkg.name)        // "podman.io"
 * console.log(pkg.description) // "Package from pantry: podman.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/podman-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const podmanioPackage = {
  /**
   * The display name of this package.
   */
  name: 'podman.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'podman.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: podman.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install podman.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'qemu.org',
    'github.com/containers/gvisor-tap-vsock',
    'github.com/crc-org/vfkit',
    'go.dev=1.23.3',
    'gnu.org/coreutils',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/podman.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PodmanioPackage = typeof podmanioPackage
