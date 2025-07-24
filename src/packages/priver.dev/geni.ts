/**
 * **geni** - Package from pantry: priver.dev/geni
 *
 * @domain `priver.dev/geni`
 *
 * @install `launchpad install priver.dev/geni`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.priverdevgeni
 * console.log(pkg.name)        // "geni"
 * console.log(pkg.description) // "Package from pantry: priver.dev/geni"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/priver-dev/geni.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const priverdevgeniPackage = {
  /**
   * The display name of this package.
   */
  name: 'geni' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'priver.dev/geni' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: priver.dev/geni' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install priver.dev/geni' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +priver.dev/geni -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install priver.dev/geni' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/priver.dev/geni/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PriverdevgeniPackage = typeof priverdevgeniPackage
