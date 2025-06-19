/**
 * **kluctl** - The missing glue to put together large Kubernetes deployments, composed of multiple smaller parts (Helm/Kustomize/...)  in a manageable and unified way.
 *
 * @domain `kluctl.io`
 * @programs `kluctl`
 * @version `2.26.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kluctl`
 * @aliases `kluctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kluctl
 * // Or access via domain
 * const samePkg = pantry.kluctlio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kluctl.io"
 * console.log(pkg.description) // "The missing glue to put together large Kubernet..."
 * console.log(pkg.programs)    // ["kluctl"]
 * console.log(pkg.versions[0]) // "2.26.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kluctl-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kluctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'kluctl.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kluctl.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The missing glue to put together large Kubernetes deployments, composed of multiple smaller parts (Helm/Kustomize/...)  in a manageable and unified way.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kluctl.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kluctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kluctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.26.0',
    '2.25.1',
    '2.25.0',
    '2.24.1',
    '2.24.0',
    '2.23.5',
    '2.23.4',
    '2.23.3',
    '2.23.2',
    '2.23.1',
    '2.23.0',
    '2.22.1',
    '2.22.0',
    '2.21.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kluctl',
  ] as const,
}

export type KluctlPackage = typeof kluctlPackage
