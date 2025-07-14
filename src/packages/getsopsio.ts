/**
 * **getsops.io** - Package from pantry: getsops.io
 *
 * @domain `getsops.io`
 *
 * @install `launchpad install getsops.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getsopsio
 * console.log(pkg.name)        // "getsops.io"
 * console.log(pkg.description) // "Package from pantry: getsops.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getsops-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getsopsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'getsops.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getsops.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: getsops.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install getsops.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +getsops.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install getsops.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getsops.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GetsopsioPackage = typeof getsopsioPackage
