/**
 * **htslib.org** - C library for high-throughput sequencing data formats
 *
 * @domain `htslib.org`
 * @programs `bgzip`, `htsfile`, `tabix`
 * @version `1.22.0` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/htslib-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +htslib.org -- $SHELL -i`
 * @dependencies `sourceware.org/bzip2`, `tukaani.org/xz`, `zlib.net^1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.htsliborg
 * console.log(pkg.name)        // "htslib.org"
 * console.log(pkg.description) // "C library for high-throughput sequencing data f..."
 * console.log(pkg.programs)    // ["bgzip", "htsfile", ...]
 * console.log(pkg.versions[0]) // "1.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/htslib-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const htsliborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'htslib.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'htslib.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C library for high-throughput sequencing data formats' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/htslib.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +htslib.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bgzip',
    'htsfile',
    'tabix',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2',
    'tukaani.org/xz',
    'zlib.net^1',
    'curl.se>=5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.1',
    '1.19.0',
    '1.18.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'htslib.org' as const,
}

export type HtsliborgPackage = typeof htsliborgPackage
