/**
 * **ohmyposh.dev** - Package from pantry: ohmyposh.dev
 *
 * @domain `ohmyposh.dev`
 *
 * @install `launchpad install ohmyposh.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ohmyposhdev
 * console.log(pkg.name)        // "ohmyposh.dev"
 * console.log(pkg.description) // "Package from pantry: ohmyposh.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ohmyposh-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ohmyposhdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'ohmyposh.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ohmyposh.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ohmyposh.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ohmyposh.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ohmyposh.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ohmyposh.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ohmyposh.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OhmyposhdevPackage = typeof ohmyposhdevPackage
