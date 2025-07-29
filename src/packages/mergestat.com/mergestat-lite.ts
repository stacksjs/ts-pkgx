/**
 * **mergestat-lite** - Package from pantry: mergestat.com/mergestat-lite
 *
 * @domain `mergestat.com/mergestat-lite`
 *
 * @install `launchpad install mergestat.com/mergestat-lite`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mergestatcommergestatlite
 * console.log(pkg.name)        // "mergestat-lite"
 * console.log(pkg.description) // "Package from pantry: mergestat.com/mergestat-lite"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mergestat-com/mergestat-lite.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mergestatcommergestatlitePackage = {
  /**
   * The display name of this package.
   */
  name: 'mergestat-lite' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mergestat.com/mergestat-lite' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mergestat.com/mergestat-lite' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mergestat.com/mergestat-lite' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mergestat.com/mergestat-lite -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mergestat.com/mergestat-lite' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mergestat.com/mergestat-lite/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MergestatcommergestatlitePackage = typeof mergestatcommergestatlitePackage
