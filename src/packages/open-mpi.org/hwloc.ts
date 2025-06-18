/**
 * **hwloc** - Portable abstraction of the hierarchical topology of modern architectures
 *
 * @domain `open-mpi.org/hwloc`
 * @programs `hwloc-annotate`, `hwloc-bind`, `hwloc-calc`, `hwloc-compress-dir`, `hwloc-diff`, ... (+5 more)
 * @version `2.12.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +open-mpi.org/hwloc -- $SHELL -i`
 * @aliases `hwloc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.hwloc
 * // Or access via domain
 * const samePkg = pantry.openmpiorghwloc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "open-mpi.org/hwloc"
 * console.log(pkg.description) // "Portable abstraction of the hierarchical topolo..."
 * console.log(pkg.programs)    // ["hwloc-annotate", "hwloc-bind", ...]
 * console.log(pkg.versions[0]) // "2.12.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/open-mpi-org/hwloc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hwlocPackage = {
  /**
   * The display name of this package.
   */
  name: 'open-mpi.org/hwloc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'open-mpi.org/hwloc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Portable abstraction of the hierarchical topology of modern architectures' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/hwloc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +open-mpi.org/hwloc -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hwloc-annotate',
    'hwloc-bind',
    'hwloc-calc',
    'hwloc-compress-dir',
    'hwloc-diff',
    'hwloc-distrib',
    'hwloc-info',
    'hwloc-patch',
    'hwloc-ps',
    'lstopo-no-graphics',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.12.1',
    '2.12.0',
    '2.11.2',
    '2.11.1',
    '2.11.0',
    '2.10.0',
    '2.9.3',
    '2.9.2',
    '2.9.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'hwloc',
  ] as const,
  fullPath: 'open-mpi.org/hwloc' as const,
}

export type HwlocPackage = typeof hwlocPackage
