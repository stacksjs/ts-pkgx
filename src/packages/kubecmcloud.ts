/**
 * **kubecm.cloud** - Package from pantry: kubecm.cloud
 *
 * @domain `kubecm.cloud`
 *
 * @install `launchpad install kubecm.cloud`
 * @dependencies `go.dev^1.22`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubecmcloud
 * console.log(pkg.name)        // "kubecm.cloud"
 * console.log(pkg.description) // "Package from pantry: kubecm.cloud"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubecm-cloud.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubecmcloudPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubecm.cloud' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubecm.cloud' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kubecm.cloud' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kubecm.cloud' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.22',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubecm.cloud/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubecmcloudPackage = typeof kubecmcloudPackage
