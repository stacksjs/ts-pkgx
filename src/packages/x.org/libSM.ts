/**
 * **libSM** - Package from pantry: x.org/libSM
 *
 * @domain `x.org/libSM`
 *
 * @install `launchpad install x.org/libSM`
 * @dependencies `x.org/ice`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibsm
 * console.log(pkg.name)        // "libSM"
 * console.log(pkg.description) // "Package from pantry: x.org/libSM"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libSM.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibsmPackage = {
  /**
   * The display name of this package.
   */
  name: 'libSM' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libSM' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/libSM' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/libSM' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/libSM -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/libSM' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/ice',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libSM/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorglibsmPackage = typeof xorglibsmPackage
