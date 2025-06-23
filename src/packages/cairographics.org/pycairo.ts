/**
 * **cairographics.org/pycairo** - Python bindings for cairo
 *
 * @domain `cairographics.org/pycairo`
 * @version `1.28.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cairographics.org/pycairo`
 * @dependencies `cairographics.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cairographicsorgpycairo
 * console.log(pkg.name)        // "cairographics.org/pycairo"
 * console.log(pkg.description) // "Python bindings for cairo"
 * console.log(pkg.versions[0]) // "1.28.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cairographics-org/pycairo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cairographicsorgpycairoPackage = {
  /**
   * The display name of this package.
   */
  name: 'cairographics.org/pycairo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cairographics.org/pycairo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python bindings for cairo' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cairographics.org/pycairo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cairographics.org/pycairo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.28.0',
    '1.27.0',
    '1.26.1',
    '1.26.0',
    '1.25.1',
    '1.25.0',
    '1.24.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cairographics.org/pycairo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cairographics.org/pycairo' as const,
}

export type CairographicsorgpycairoPackage = typeof cairographicsorgpycairoPackage
