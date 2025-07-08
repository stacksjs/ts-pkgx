/**
 * **pv** - Package from pantry: ivarch.com/pv
 *
 * @domain `ivarch.com/pv`
 *
 * @install `launchpad install ivarch.com/pv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ivarchcompv
 * console.log(pkg.name)        // "pv"
 * console.log(pkg.description) // "Package from pantry: ivarch.com/pv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ivarch-com/pv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ivarchcompvPackage = {
  /**
   * The display name of this package.
   */
  name: 'pv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ivarch.com/pv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ivarch.com/pv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ivarch.com/pv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ivarch.com/pv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ivarch.com/pv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ivarch.com/pv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IvarchcompvPackage = typeof ivarchcompvPackage
