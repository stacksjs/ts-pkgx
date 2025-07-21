/**
 * **werf.io** - Package from pantry: werf.io
 *
 * @domain `werf.io`
 *
 * @install `launchpad install werf.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.werfio
 * console.log(pkg.name)        // "werf.io"
 * console.log(pkg.description) // "Package from pantry: werf.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/werf-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const werfioPackage = {
  /**
   * The display name of this package.
   */
  name: 'werf.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'werf.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: werf.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install werf.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +werf.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install werf.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/werf.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WerfioPackage = typeof werfioPackage
