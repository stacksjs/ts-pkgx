/**
 * **kubebuilder.io** - Package from pantry: kubebuilder.io
 *
 * @domain `kubebuilder.io`
 *
 * @install `launchpad install kubebuilder.io`
 * @dependencies `go.dev~1.23`, `gnu.org/coreutils`, `gnu.org/grep`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubebuilderio
 * console.log(pkg.name)        // "kubebuilder.io"
 * console.log(pkg.description) // "Package from pantry: kubebuilder.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubebuilder-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubebuilderioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubebuilder.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubebuilder.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kubebuilder.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kubebuilder.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.23',
    'gnu.org/coreutils',
    'gnu.org/grep',
    'go.dev^1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubebuilder.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubebuilderioPackage = typeof kubebuilderioPackage
