/**
 * **kind.sigs.k8s.io** - Package from pantry: kind.sigs.k8s.io
 *
 * @domain `kind.sigs.k8s.io`
 *
 * @install `launchpad install kind.sigs.k8s.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kindsigsk8sio
 * console.log(pkg.name)        // "kind.sigs.k8s.io"
 * console.log(pkg.description) // "Package from pantry: kind.sigs.k8s.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kind-sigs-k8s-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kindsigsk8sioPackage = {
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
  description: 'Package from pantry: kind.sigs.k8s.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kind.sigs.k8s.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kind.sigs.k8s.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kind.sigs.k8s.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kind.sigs.k8s.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Kindsigsk8sioPackage = typeof kindsigsk8sioPackage
