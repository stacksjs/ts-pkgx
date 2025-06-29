/**
 * **kubelinter.io** - Package from pantry: kubelinter.io
 *
 * @domain `kubelinter.io`
 *
 * @install `launchpad install kubelinter.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubelinterio
 * console.log(pkg.name)        // "kubelinter.io"
 * console.log(pkg.description) // "Package from pantry: kubelinter.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubelinter-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubelinterioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubelinter.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubelinter.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kubelinter.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kubelinter.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kubelinter.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kubelinter.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubelinter.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubelinterioPackage = typeof kubelinterioPackage
