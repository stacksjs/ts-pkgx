/**
 * **lib** - Package from pantry: pngquant.org/lib
 *
 * @domain `pngquant.org/lib`
 *
 * @install `launchpad install pngquant.org/lib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pngquantorglib
 * console.log(pkg.name)        // "lib"
 * console.log(pkg.description) // "Package from pantry: pngquant.org/lib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pngquant-org/lib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pngquantorglibPackage = {
  /**
   * The display name of this package.
   */
  name: 'lib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pngquant.org/lib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pngquant.org/lib' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pngquant.org/lib' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pngquant.org/lib -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pngquant.org/lib' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pngquant.org/lib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PngquantorglibPackage = typeof pngquantorglibPackage
