/**
 * **zarf.dev** - Package from pantry: zarf.dev
 *
 * @domain `zarf.dev`
 *
 * @install `launchpad install zarf.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zarfdev
 * console.log(pkg.name)        // "zarf.dev"
 * console.log(pkg.description) // "Package from pantry: zarf.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zarf-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zarfdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'zarf.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zarf.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: zarf.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zarf.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +zarf.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install zarf.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zarf.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ZarfdevPackage = typeof zarfdevPackage
