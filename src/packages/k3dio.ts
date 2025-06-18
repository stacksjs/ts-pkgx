/**
 * **k3d.io** - Package from pantry: k3d.io
 *
 * @domain `k3d.io`
 *
 * @install `launchpad install k3d.io`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.k3dio
 * console.log(pkg.name)        // "k3d.io"
 * console.log(pkg.description) // "Package from pantry: k3d.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k3d-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k3dioPackage = {
  /**
   * The display name of this package.
   */
  name: 'k3d.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'k3d.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: k3d.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install k3d.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/k3d.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type K3dioPackage = typeof k3dioPackage
