/**
 * **vcluster.com** - Package from pantry: vcluster.com
 *
 * @domain `vcluster.com`
 *
 * @install `launchpad install vcluster.com`
 * @dependencies `kubernetes.io/kubectl^1`, `curl.se/ca-certs`, `go.dev^1.21`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vclustercom
 * console.log(pkg.name)        // "vcluster.com"
 * console.log(pkg.description) // "Package from pantry: vcluster.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vcluster-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vclustercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'vcluster.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vcluster.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vcluster.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vcluster.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kubernetes.io/kubectl^1',
    'curl.se/ca-certs',
    'go.dev^1.21',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vcluster.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VclustercomPackage = typeof vclustercomPackage
