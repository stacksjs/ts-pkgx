/**
 * **cvt** - VESA CVT standard timing modelines generator
 *
 * @domain `x.org/libcvt`
 * @programs `cvt`
 * @version `0.1.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cvt`
 * @aliases `cvt`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cvt
 * // Or access via domain
 * const samePkg = pantry.xorglibcvt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libcvt"
 * console.log(pkg.description) // "VESA CVT standard timing modelines generator"
 * console.log(pkg.programs)    // ["cvt"]
 * console.log(pkg.versions[0]) // "0.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libcvt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cvtPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcvt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libcvt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'VESA CVT standard timing modelines generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libcvt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install cvt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cvt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/exts',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.3',
    '0.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cvt',
  ] as const,
}

export type CvtPackage = typeof cvtPackage
