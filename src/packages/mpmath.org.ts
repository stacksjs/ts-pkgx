/**
 * **mpmath.org** - pkgx package
 *
 * @domain `mpmath.org`
 * @version `1.3.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/mpmath-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +mpmath.org -- $SHELL -i`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mpmathorg
 * console.log(pkg.name)        // "mpmath.org"
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpmath-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpmathorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpmath.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpmath.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpmath.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mpmath.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'mpmath.org' as const,
}

export type MpmathorgPackage = typeof mpmathorgPackage
