/**
 * **kubecm** - Manage your kubeconfig more easily.
 *
 * @domain `kubecm.cloud`
 * @programs `kubecm`
 * @version `0.33.0` (10 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/kubecm-cloud.md
 * @install `sh <(curl https://pkgx.sh) kubecm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubecmcloud
 * console.log(pkg.name)        // "kubecm"
 * console.log(pkg.description) // "Manage your kubeconfig more easily."
 * console.log(pkg.programs)    // ["kubecm"]
 * console.log(pkg.versions[0]) // "0.33.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubecm-cloud.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubecmcloudPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubecm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubecm.cloud' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Manage your kubeconfig more easily.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubecm.cloud/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) kubecm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubecm',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.33.0',
    '0.32.3',
    '0.32.2',
    '0.32.1',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.1',
    '0.29.0',
    '0.28.0',
  ] as const,
  fullPath: 'kubecm.cloud' as const,
  aliases: [] as const,
}

export type KubecmcloudPackage = typeof kubecmcloudPackage
