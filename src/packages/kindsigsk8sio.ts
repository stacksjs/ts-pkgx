/**
 * **kind** - Kubernetes IN Docker - local clusters for testing Kubernetes
 *
 * @domain `kind.sigs.k8s.io`
 * @programs `kind`
 * @version `0.29.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kind`
 * @aliases `kind`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kind
 * // Or access via domain
 * const samePkg = pantry.kindsigsk8sio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kind.sigs.k8s.io"
 * console.log(pkg.description) // "Kubernetes IN Docker - local clusters for testi..."
 * console.log(pkg.programs)    // ["kind"]
 * console.log(pkg.versions[0]) // "0.29.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kind-sigs-k8s-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kindPackage = {
  /**
   * The display name of this package.
   */
  name: 'kind.sigs.k8s.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kind.sigs.k8s.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Kubernetes IN Docker - local clusters for testing Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kind.sigs.k8s.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kind' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kind',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.29.0',
    '0.28.0',
    '0.27.0',
    '0.26.0',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kind',
  ] as const,
}

export type KindPackage = typeof kindPackage
