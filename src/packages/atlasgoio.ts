/**
 * **atlasgo.io** - Package from pantry: atlasgo.io
 *
 * @domain `atlasgo.io`
 *
 * @install `launchpad install atlasgo.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.atlasgoio
 * console.log(pkg.name)        // "atlasgo.io"
 * console.log(pkg.description) // "Package from pantry: atlasgo.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/atlasgo-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const atlasgoioPackage = {
  /**
   * The display name of this package.
   */
  name: 'atlasgo.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'atlasgo.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: atlasgo.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install atlasgo.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +atlasgo.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install atlasgo.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/atlasgo.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AtlasgoioPackage = typeof atlasgoioPackage
