/**
 * **openshift.com** - Package from pantry: openshift.com
 *
 * @domain `openshift.com`
 *
 * @install `launchpad install openshift.com`
 * @dependencies `kerberos.org^1.21`, `go.dev^1.21`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openshiftcom
 * console.log(pkg.name)        // "openshift.com"
 * console.log(pkg.description) // "Package from pantry: openshift.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openshift-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openshiftcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'openshift.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openshift.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openshift.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openshift.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kerberos.org^1.21',
    'go.dev^1.21',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openshift.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenshiftcomPackage = typeof openshiftcomPackage
