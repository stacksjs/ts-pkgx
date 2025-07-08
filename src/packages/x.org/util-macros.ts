/**
 * **util-macros** - Package from pantry: x.org/util-macros
 *
 * @domain `x.org/util-macros`
 *
 * @install `launchpad install x.org/util-macros`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgutilmacros
 * console.log(pkg.name)        // "util-macros"
 * console.log(pkg.description) // "Package from pantry: x.org/util-macros"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/util-macros.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgutilmacrosPackage = {
  /**
   * The display name of this package.
   */
  name: 'util-macros' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/util-macros' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/util-macros' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/util-macros' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/util-macros -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/util-macros' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/util-macros/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgutilmacrosPackage = typeof xorgutilmacrosPackage
