/**
 * **liblinear** - Package from pantry: csie.ntu.edu.tw/cjlin/liblinear
 *
 * @domain `csie.ntu.edu.tw/cjlin/liblinear`
 *
 * @install `launchpad install csie.ntu.edu.tw/cjlin/liblinear`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.csientuedutwcjlinliblinear
 * console.log(pkg.name)        // "liblinear"
 * console.log(pkg.description) // "Package from pantry: csie.ntu.edu.tw/cjlin/libl..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/csie-ntu-edu-tw/cjlin/liblinear.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const csientuedutwcjlinliblinearPackage = {
  /**
   * The display name of this package.
   */
  name: 'liblinear' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'csie.ntu.edu.tw/cjlin/liblinear' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: csie.ntu.edu.tw/cjlin/liblinear' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install csie.ntu.edu.tw/cjlin/liblinear' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +csie.ntu.edu.tw/cjlin/liblinear -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install csie.ntu.edu.tw/cjlin/liblinear' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/csie.ntu.edu.tw/cjlin/liblinear/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CsientuedutwcjlinliblinearPackage = typeof csientuedutwcjlinliblinearPackage
