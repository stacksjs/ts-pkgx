/**
 * **applesimutils** - Package from pantry: wix.com/applesimutils
 *
 * @domain `wix.com/applesimutils`
 *
 * @install `launchpad install wix.com/applesimutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wixcomapplesimutils
 * console.log(pkg.name)        // "applesimutils"
 * console.log(pkg.description) // "Package from pantry: wix.com/applesimutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wix-com/applesimutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wixcomapplesimutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'applesimutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wix.com/applesimutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wix.com/applesimutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wix.com/applesimutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wix.com/applesimutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wix.com/applesimutils' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wix.com/applesimutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WixcomapplesimutilsPackage = typeof wixcomapplesimutilsPackage
