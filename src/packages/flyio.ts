/**
 * **fly.io** - Package from pantry: fly.io
 *
 * @domain `fly.io`
 *
 * @install `launchpad install fly.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flyio
 * console.log(pkg.name)        // "fly.io"
 * console.log(pkg.description) // "Package from pantry: fly.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fly-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'fly.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fly.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fly.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fly.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fly.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fly.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fly.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FlyioPackage = typeof flyioPackage
