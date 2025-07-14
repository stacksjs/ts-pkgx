/**
 * **math** - Package from pantry: libtom.net/math
 *
 * @domain `libtom.net/math`
 *
 * @install `launchpad install libtom.net/math`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libtomnetmath
 * console.log(pkg.name)        // "math"
 * console.log(pkg.description) // "Package from pantry: libtom.net/math"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libtom-net/math.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libtomnetmathPackage = {
  /**
   * The display name of this package.
   */
  name: 'math' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libtom.net/math' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libtom.net/math' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libtom.net/math' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libtom.net/math -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libtom.net/math' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libtom.net/math/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibtomnetmathPackage = typeof libtomnetmathPackage
