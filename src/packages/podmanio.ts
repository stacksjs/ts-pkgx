/**
 * **podman.io** - Package from pantry: podman.io
 *
 * @domain `podman.io`
 *
 * @install `launchpad install podman.io`
 * @dependencies `qemu.org`, `github.com/containers/gvisor-tap-vsock`, `darwin:github.com/crc-org/vfkit` (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install podman.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'qemu.org',
    'github.com/containers/gvisor-tap-vsock',
    'darwin:github.com/crc-org/vfkit',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/podman.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PodmanioPackage = typeof podmanioPackage
