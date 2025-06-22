/**
 * **flipt.io** - Package from pantry: flipt.io
 *
 * @domain `flipt.io`
 *
 * @install `launchpad install flipt.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fliptio
 * console.log(pkg.name)        // "flipt.io"
 * console.log(pkg.description) // "Package from pantry: flipt.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flipt-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fliptioPackage = {
  /**
   * The display name of this package.
   */
  name: 'flipt.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flipt.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: flipt.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install flipt.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +flipt.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install flipt.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flipt.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FliptioPackage = typeof fliptioPackage
