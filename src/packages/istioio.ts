/**
 * **istioctl** - Connect, secure, control, and observe services.
 *
 * @domain `istio.io`
 * @programs `istioctl`
 * @version `1.26.1` (41 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install istioctl`
 * @aliases `istioctl`
 * @dependencies `go.dev^1.21`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.istioctl
 * // Or access via domain
 * const samePkg = pantry.istioio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "istio.io"
 * console.log(pkg.description) // "Connect, secure, control, and observe services."
 * console.log(pkg.programs)    // ["istioctl"]
 * console.log(pkg.versions[0]) // "1.26.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/istio-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const istioctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'istio.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'istio.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Connect, secure, control, and observe services.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/istio.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/istio/istio' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install istioctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'istioctl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.26.1',
    '1.26.0',
    '1.25.3',
    '1.25.2',
    '1.25.1',
    '1.25.0',
    '1.24.6',
    '1.24.4',
    '1.24.3',
    '1.24.2',
    '1.24.1',
    '1.24.0',
    '1.23.6',
    '1.23.5',
    '1.23.4',
    '1.23.3',
    '1.23.2',
    '1.23.1',
    '1.23.0',
    '1.22.8',
    '1.22.7',
    '1.22.6',
    '1.22.5',
    '1.22.4',
    '1.22.3',
    '1.22.2',
    '1.22.1',
    '1.22.0',
    '1.21.6',
    '1.21.5',
    '1.21.4',
    '1.21.3',
    '1.21.2',
    '1.21.1',
    '1.21.0',
    '1.20.8',
    '1.20.7',
    '1.20.6',
    '1.20.5',
    '1.19.10',
    '1.19.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'istioctl',
  ] as const,
}

export type IstioctlPackage = typeof istioctlPackage
