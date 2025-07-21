/**
 * **zrok.io** - Package from pantry: zrok.io
 *
 * @domain `zrok.io`
 *
 * @install `launchpad install zrok.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zrokio
 * console.log(pkg.name)        // "zrok.io"
 * console.log(pkg.description) // "Package from pantry: zrok.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zrok-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zrokioPackage = {
  /**
   * The display name of this package.
   */
  name: 'zrok.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zrok.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: zrok.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zrok.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +zrok.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install zrok.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zrok.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ZrokioPackage = typeof zrokioPackage
