/**
 * **python-cffi/cffi** - A Foreign Function Interface package for calling C libraries from Python.
 *
 * @domain `github.com/python-cffi/cffi`
 * @version `1.17.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/python-cffi/cffi -- $SHELL -i`
 * @aliases `python-cffi/cffi`
 * @dependencies `python.org>=3.11`, `github.com/eliben/pycparser^2.21`, `sourceware.org/libffi^3.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pythoncfficffi
 * // Or access via domain
 * const samePkg = pantry.githubcompythoncfficffi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/python-cffi/cffi"
 * console.log(pkg.description) // "A Foreign Function Interface package for callin..."
 * console.log(pkg.versions[0]) // "1.17.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/python-cffi/cffi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythoncfficffiPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/python-cffi/cffi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/python-cffi/cffi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Foreign Function Interface package for calling C libraries from Python.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/python-cffi/cffi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/python-cffi/cffi -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
    'github.com/eliben/pycparser^2.21',
    'sourceware.org/libffi^3.4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.17.1',
    '1.17.0',
    '1.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'python-cffi/cffi',
  ] as const,
  fullPath: 'github.com/python-cffi/cffi' as const,
}

export type PythoncfficffiPackage = typeof pythoncfficffiPackage
