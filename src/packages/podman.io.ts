/**
 * **podman** - Crafters of fine Open Source products
 *
 * @domain `podman.io`
 * @programs `podman`, `podman-remote`, `podman-mac-helper`
 * @version `5.5.0` (10 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/podman-io.md
 *
 * @install `pkgx podman.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.podmanio
 * console.log(pkg.name)        // "podman"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * console.log(pkg.programs)    // ["podman", "podman-remote", ...]
 * console.log(pkg.versions[0]) // "5.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/podman-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const podmanioPackage = {
  /**
   * The display name of this package.
   */
  name: 'podman' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
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
  ] as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'podman',
    'podman-remote',
    'podman-mac-helper',
  ] as const,
  homepage: 'https://pkgx.dev/pkgs/podman.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'podman.io' as const,
  fullPath: 'podman.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx podman.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PodmanioPackage = typeof podmanioPackage
