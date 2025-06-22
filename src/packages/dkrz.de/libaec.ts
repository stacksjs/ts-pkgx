/**
 * **libaec** - Package from pantry: dkrz.de/libaec
 *
 * @domain `dkrz.de/libaec`
 *
 * @install `launchpad install dkrz.de/libaec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dkrzdelibaec
 * console.log(pkg.name)        // "libaec"
 * console.log(pkg.description) // "Package from pantry: dkrz.de/libaec"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dkrz-de/libaec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dkrzdelibaecPackage = {
  /**
   * The display name of this package.
   */
  name: 'libaec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dkrz.de/libaec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dkrz.de/libaec' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dkrz.de/libaec' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dkrz.de/libaec -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dkrz.de/libaec' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dkrz.de/libaec/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DkrzdelibaecPackage = typeof dkrzdelibaecPackage
