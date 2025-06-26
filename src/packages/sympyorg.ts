/**
 * **sympy.org** - Package from pantry: sympy.org
 *
 * @domain `sympy.org`
 *
 * @install `launchpad install sympy.org`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sympyorg
 * console.log(pkg.name)        // "sympy.org"
 * console.log(pkg.description) // "Package from pantry: sympy.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sympy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sympyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sympy.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sympy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sympy.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sympy.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sympy.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sympy.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sympy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SympyorgPackage = typeof sympyorgPackage
