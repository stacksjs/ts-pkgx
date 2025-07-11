/**
 * **himalaya** - Package from pantry: pimalaya.org/himalaya
 *
 * @domain `pimalaya.org/himalaya`
 *
 * @install `launchpad install pimalaya.org/himalaya`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pimalayaorghimalaya
 * console.log(pkg.name)        // "himalaya"
 * console.log(pkg.description) // "Package from pantry: pimalaya.org/himalaya"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pimalaya-org/himalaya.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pimalayaorghimalayaPackage = {
  /**
   * The display name of this package.
   */
  name: 'himalaya' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pimalaya.org/himalaya' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pimalaya.org/himalaya' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pimalaya.org/himalaya' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pimalaya.org/himalaya -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pimalaya.org/himalaya' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pimalaya.org/himalaya/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PimalayaorghimalayaPackage = typeof pimalayaorghimalayaPackage
