/**
 * **+podman.io -- $SHELL -i** - Podman: A tool for managing OCI containers and pods.
 *
 * @domain `podman.io`
 * @programs `podman`, `podman-remote`, `podman-mac-helper`
 * @version `5.5.0` (38 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/podman-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +podman.io -- $SHELL -i`
 * @aliases `+podman.io -- $SHELL -i`, `podman`
 * @dependencies `qemu.org`, `github.com/containers/gvisor-tap-vsock`, `darwingithub.com/crc-org/vfkit`, ... (+1 more)
 * @companions `openssh.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.podmanioSHELLi
 * // Or access via domain
 * const samePkg = pantry.podmanio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "podman"
 * console.log(pkg.description) // "Podman: A tool for managing OCI containers and ..."
 * console.log(pkg.programs)    // ["podman", "podman-remote", ...]
 * console.log(pkg.versions[0]) // "5.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/podman-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const podmanioSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'podman' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'podman.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Podman: A tool for managing OCI containers and pods.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/podman.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +podman.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'podman',
    'podman-remote',
    'podman-mac-helper',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'openssh.com',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'qemu.org',
    'github.com/containers/gvisor-tap-vsock',
    'darwingithub.com/crc-org/vfkit',
    'github.com/crc-org/vfkit',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.5.0',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.2',
    '5.3.1',
    '5.3.0',
    '5.2.5',
    '5.2.4',
    '5.2.3',
    '5.2.2',
    '5.2.1',
    '5.2.0',
    '5.1.2',
    '5.1.1',
    '5.1.0',
    '5.0.3',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.9.5',
    '4.9.4',
    '4.9.3',
    '4.9.2',
    '4.9.1',
    '4.9.0',
    '4.8.3',
    '4.8.2',
    '4.8.1',
    '4.8.0',
    '4.7.2',
    '4.7.1',
    '4.7.0',
    '4.6.2',
    '4.6.1',
    '4.6.0',
    '4.5.1',
    '4.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+podman.io -- $SHELL -i',
    'podman',
  ] as const,
  fullPath: 'podman.io' as const,
}

export type PodmanioSHELLiPackage = typeof podmanioSHELLiPackage
