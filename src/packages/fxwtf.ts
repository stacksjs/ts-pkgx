/**
 * **fx.wtf** - Package from pantry: fx.wtf
 *
 * @domain `fx.wtf`
 *
 * @install `launchpad install fx.wtf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fxwtf
 * console.log(pkg.name)        // "fx.wtf"
 * console.log(pkg.description) // "Package from pantry: fx.wtf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fx-wtf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fxwtfPackage = {
  /**
   * The display name of this package.
   */
  name: 'fx.wtf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fx.wtf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fx.wtf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fx.wtf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fx.wtf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fx.wtf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fx.wtf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FxwtfPackage = typeof fxwtfPackage
