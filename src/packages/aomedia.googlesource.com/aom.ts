/**
 * **aom** - Package from pantry: aomedia.googlesource.com/aom
 *
 * @domain `aomedia.googlesource.com/aom`
 *
 * @install `launchpad install aomedia.googlesource.com/aom`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aomediagooglesourcecomaom
 * console.log(pkg.name)        // "aom"
 * console.log(pkg.description) // "Package from pantry: aomedia.googlesource.com/aom"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aomedia-googlesource-com/aom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aomediagooglesourcecomaomPackage = {
  /**
   * The display name of this package.
   */
  name: 'aom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aomedia.googlesource.com/aom' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aomedia.googlesource.com/aom' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aomedia.googlesource.com/aom' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aomedia.googlesource.com/aom -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aomedia.googlesource.com/aom' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aomedia.googlesource.com/aom/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AomediagooglesourcecomaomPackage = typeof aomediagooglesourcecomaomPackage
