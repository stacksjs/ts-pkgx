/**
 * **sympy.org** - A computer algebra system written in pure Python
 *
 * @domain `sympy.org`
 * @version `1.14.0` (7 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/sympy-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +sympy.org -- $SHELL -i`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sympyorg
 * console.log(pkg.name)        // "sympy.org"
 * console.log(pkg.description) // "A computer algebra system written in pure Python"
 * console.log(pkg.versions[0]) // "1.14.0" (latest)
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
  description: 'A computer algebra system written in pure Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sympy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +sympy.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.0',
    '1.13.3',
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.1',
    '1.12.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'sympy.org' as const,
}

export type SympyorgPackage = typeof sympyorgPackage
