/**
 * **helmfile** - Declaratively deploy your Kubernetes manifests, Kustomize configs, and Charts as Helm releases. Generate all-in-one manifests for use with ArgoCD.
 *
 * @domain `github.com/helmfile/helmfile`
 * @programs `helmfile`
 * @version `1.1.6` (29 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install helmfile`
 * @name `helmfile`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.helmfile
 * // Or access via domain
 * const samePkg = pantry.githubcomhelmfilehelmfile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "helmfile"
 * console.log(pkg.description) // "Declaratively deploy your Kubernetes manifests,..."
 * console.log(pkg.programs)    // ["helmfile"]
 * console.log(pkg.versions[0]) // "1.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/helmfile/helmfile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helmfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'helmfile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/helmfile/helmfile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Declaratively deploy your Kubernetes manifests, Kustomize configs, and Charts as Helm releases. Generate all-in-one manifests for use with ArgoCD.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/helmfile/helmfile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/helmfile/helmfile' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install helmfile' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'helmfile',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.6',
    '1.1.5',
    '1.1.4',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.0',
    '0.171.0',
    '0.170.1',
    '0.170.0',
    '0.169.2',
    '0.169.1',
    '0.169.0',
    '0.168.0',
    '0.167.1',
    '0.167.0',
    '0.166.0',
    '0.165.0',
    '0.164.0',
    '0.163.1',
    '0.163.0',
    '0.162.0',
    '0.161.0',
    '0.160.0',
    '0.159.0',
    '0.158.1',
    '0.158.0',
    '0.157.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) helmfile -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install helmfile' as const,
}

export type HelmfilePackage = typeof helmfilePackage
