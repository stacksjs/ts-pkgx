/**
 * **istio.io** - Package from pantry: istio.io
 *
 * @domain `istio.io`
 *
 * @install `launchpad install istio.io`
 * @dependencies `go.dev^1.21`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.istioio
 * console.log(pkg.name)        // "istio.io"
 * console.log(pkg.description) // "Package from pantry: istio.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/istio-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const istioioPackage = {
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
  description: 'Package from pantry: istio.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install istio.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/istio.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IstioioPackage = typeof istioioPackage
