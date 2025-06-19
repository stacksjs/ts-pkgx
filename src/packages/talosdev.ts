/**
 * **talosctl** - CLI for out-of-band management of Kubernetes nodes created by Talos
 *
 * @domain `talos.dev`
 * @programs `talosctl`
 * @version `1.10.4` (28 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install talosctl`
 * @aliases `talosctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.talosctl
 * // Or access via domain
 * const samePkg = pantry.talosdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "talos.dev"
 * console.log(pkg.description) // "CLI for out-of-band management of Kubernetes no..."
 * console.log(pkg.programs)    // ["talosctl"]
 * console.log(pkg.versions[0]) // "1.10.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/talos-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const talosctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'talos.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'talos.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for out-of-band management of Kubernetes nodes created by Talos' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/talos.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install talosctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'talosctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.6',
    '1.9.5',
    '1.9.4',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.7',
    '1.7.6',
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.8',
    '1.6.7',
    '1.6.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'talosctl',
  ] as const,
}

export type TalosctlPackage = typeof talosctlPackage
