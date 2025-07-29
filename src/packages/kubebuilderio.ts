/**
 * **kubebuilder.io** - Package from pantry: kubebuilder.io
 *
 * @domain `kubebuilder.io`
 *
 * @install `launchpad install kubebuilder.io`
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kubebuilder.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kubebuilder.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kubebuilder.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubebuilder.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubebuilderioPackage = typeof kubebuilderioPackage
