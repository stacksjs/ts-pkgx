/**
 * **digger.dev** - Package from pantry: digger.dev
 *
 * @domain `digger.dev`
 *
 * @install `launchpad install digger.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.diggerdev
 * console.log(pkg.name)        // "digger.dev"
 * console.log(pkg.description) // "Package from pantry: digger.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digger-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const diggerdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'digger.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digger.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: digger.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install digger.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +digger.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install digger.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/digger.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DiggerdevPackage = typeof diggerdevPackage
