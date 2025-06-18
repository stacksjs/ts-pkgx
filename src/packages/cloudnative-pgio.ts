/**
 * **kubectl-cnpg** - CloudNativePG is a comprehensive platform designed to seamlessly manage PostgreSQL databases within Kubernetes environments, covering the entire operational lifecycle from initial deployment to ongoing maintenance
 *
 * @domain `cloudnative-pg.io`
 * @programs `kubectl-cnpg`
 * @version `1.26.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kubectl-cnpg`
 * @aliases `kubectl-cnpg`
 * @dependencies `go.dev~1.23`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kubectlcnpg
 * // Or access via domain
 * const samePkg = pantry.cloudnativepgio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cloudnative-pg.io"
 * console.log(pkg.description) // "CloudNativePG is a comprehensive platform desig..."
 * console.log(pkg.programs)    // ["kubectl-cnpg"]
 * console.log(pkg.versions[0]) // "1.26.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudnative-pg-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubectlcnpgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cloudnative-pg.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudnative-pg.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CloudNativePG is a comprehensive platform designed to seamlessly manage PostgreSQL databases within Kubernetes environments, covering the entire operational lifecycle from initial deployment to ongoing maintenance' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cloudnative-pg.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kubectl-cnpg' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubectl-cnpg',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.23',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.26.0',
    '1.25.2',
    '1.25.1',
    '1.25.0',
    '1.24.4',
    '1.24.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kubectl-cnpg',
  ] as const,
}

export type KubectlcnpgPackage = typeof kubectlcnpgPackage
