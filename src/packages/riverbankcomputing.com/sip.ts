/**
 * **sip** - Package from pantry: riverbankcomputing.com/sip
 *
 * @domain `riverbankcomputing.com/sip`
 *
 * @install `launchpad install riverbankcomputing.com/sip`
 * @dependencies `python.org~3.11`, `llvm.org<17 # needs gcc to sip-install`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.riverbankcomputingcomsip
 * console.log(pkg.name)        // "sip"
 * console.log(pkg.description) // "Package from pantry: riverbankcomputing.com/sip"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com/sip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const riverbankcomputingcomsipPackage = {
  /**
   * The display name of this package.
   */
  name: 'sip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'riverbankcomputing.com/sip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: riverbankcomputing.com/sip' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install riverbankcomputing.com/sip' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'llvm.org<17 # needs gcc to sip-install',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/riverbankcomputing.com/sip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RiverbankcomputingcomsipPackage = typeof riverbankcomputingcomsipPackage
