/**
 * **pycairo** - Package from pantry: cairographics.org/pycairo
 *
 * @domain `cairographics.org/pycairo`
 *
 * @install `launchpad install cairographics.org/pycairo`
 * @dependencies `cairographics.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cairographicsorgpycairo
 * console.log(pkg.name)        // "pycairo"
 * console.log(pkg.description) // "Package from pantry: cairographics.org/pycairo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cairographics-org/pycairo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cairographicsorgpycairoPackage = {
  /**
   * The display name of this package.
   */
  name: 'pycairo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cairographics.org/pycairo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cairographics.org/pycairo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cairographics.org/pycairo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cairographics.org/pycairo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cairographics.org/pycairo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cairographics.org/pycairo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CairographicsorgpycairoPackage = typeof cairographicsorgpycairoPackage
