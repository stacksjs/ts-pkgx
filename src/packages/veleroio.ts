/**
 * **velero.io** - Package from pantry: velero.io
 *
 * @domain `velero.io`
 *
 * @install `launchpad install velero.io`
 * @dependencies `go.dev~1.23.8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.veleroio
 * console.log(pkg.name)        // "velero.io"
 * console.log(pkg.description) // "Package from pantry: velero.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/velero-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const veleroioPackage = {
  /**
   * The display name of this package.
   */
  name: 'velero.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'velero.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: velero.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install velero.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.23.8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/velero.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VeleroioPackage = typeof veleroioPackage
