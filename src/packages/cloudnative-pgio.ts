/**
 * **kubectl-cnpg** - CloudNativePG is a comprehensive platform designed to seamlessly manage PostgreSQL databases within Kubernetes environments, covering the entire operational lifecycle from initial deployment to ongoing maintenance
 *
 * @domain `cloudnative-pg.io`
 * @programs `kubectl-cnpg`
 * @version `1.26.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kubectl-cnpg`
 * @name `kubectl-cnpg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubectlcnpg
 * // Or access via domain
 * const samePkg = pantry.cloudnativepgio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubectl-cnpg"
 * console.log(pkg.description) // "CloudNativePG is a comprehensive platform desig..."
 * console.log(pkg.programs)    // ["kubectl-cnpg"]
 * console.log(pkg.versions[0]) // "1.26.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudnative-pg-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubectlcnpgPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubectl-cnpg' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
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
  dependencies: [] as const,
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
    '1.24.4',
    '1.24.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) kubectl-cnpg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kubectl-cnpg' as const,
}

export type KubectlcnpgPackage = typeof kubectlcnpgPackage
