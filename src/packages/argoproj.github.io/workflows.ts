/**
 * **argo** - Get stuff done with container-native workflows for Kubernetes
 *
 * @domain `argoproj.github.io/workflows`
 * @programs `argo`
 * @version `3.6.10` (35 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) argo`
 * @name `argo-workflows`
 * @aliases `argo`, `workflows`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.argo
 * // Or access via domain
 * const samePkg = pantry.argoprojgithubioworkflows
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "argo-workflows"
 * console.log(pkg.description) // "Get stuff done with container-native workflows ..."
 * console.log(pkg.programs)    // ["argo"]
 * console.log(pkg.versions[0]) // "3.6.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/argoproj-github-io/workflows.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argoPackage = {
  /**
   * The display name of this package.
   */
  name: 'argo-workflows' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'argoproj.github.io/workflows' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Get stuff done with container-native workflows for Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/argoproj.github.io/workflows/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) argo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'argo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.10',
    '3.6.9',
    '3.6.8',
    '3.6.7',
    '3.6.6',
    '3.6.5',
    '3.6.4',
    '3.6.3',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.15',
    '3.5.14',
    '3.5.13',
    '3.5.12',
    '3.5.11',
    '3.5.10',
    '3.5.9',
    '3.5.8',
    '3.5.7',
    '3.5.6',
    '3.5.5',
    '3.5.4',
    '3.5.3',
    '3.5.2',
    '3.5.1',
    '3.5.0',
    '3.4.18',
    '3.4.17',
    '3.4.16',
    '3.4.15',
    '3.4.14',
    '3.4.13',
    '3.4.12',
    '3.4.11',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'argo',
    'workflows',
  ] as const,
  fullPath: 'argoproj.github.io/workflows' as const,
}

export type ArgoPackage = typeof argoPackage
