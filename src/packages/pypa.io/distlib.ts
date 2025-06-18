/**
 * **distlib** - A low-level library which implements some Python packaging  standards (PEPs) and which could be used by third-party packaging tools to achieve interoperability.
 *
 * @domain `pypa.io/distlib`
 * @version `0.3.6` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +pypa.io/distlib -- $SHELL -i`
 * @aliases `distlib`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.distlib
 * // Or access via domain
 * const samePkg = pantry.pypaiodistlib
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pypa.io/distlib"
 * console.log(pkg.description) // "A low-level library which implements some Pytho..."
 * console.log(pkg.versions[0]) // "0.3.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/distlib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const distlibPackage = {
  /**
   * The display name of this package.
   */
  name: 'pypa.io/distlib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/distlib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A low-level library which implements some Python packaging  standards (PEPs) and which could be used by third-party packaging tools to achieve interoperability.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.io/distlib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pypa.io/distlib -- $SHELL -i' as const,
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
    '0.3.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'distlib',
  ] as const,
  fullPath: 'pypa.io/distlib' as const,
}

export type DistlibPackage = typeof distlibPackage
