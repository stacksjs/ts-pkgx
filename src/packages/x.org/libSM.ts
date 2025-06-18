/**
 * **x.org/libsm** - pkgx package
 *
 * @domain `x.org/libSM`
 * @version `1.2.6` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/libSM -- $SHELL -i`
 * @aliases `x.org/libsm`, `libSM`
 * @dependencies `x.org/ice`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xorglibsm
 * // Or access via domain
 * const samePkg = pantry.xorglibsm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/libSM"
 * console.log(pkg.versions[0]) // "1.2.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libSM.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibsmPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/libSM' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libSM' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libSM/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/libSM -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/ice',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.6',
    '1.2.5',
    '1.2.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'x.org/libsm',
    'libSM',
  ] as const,
  fullPath: 'x.org/libSM' as const,
}

export type XorglibsmPackage = typeof xorglibsmPackage
