/**
 * **htslib.org** - C library for high-throughput sequencing data formats
 *
 * @domain `htslib.org`
 * @programs `bgzip`, `htsfile`, `tabix`
 * @version `1.22.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install htslib.org`
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
 * console.log(pkg.versions[0]) // "1.22.1" (latest)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install htslib.org' as const,
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
    '1.22.1',
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.1',
    '1.19.0',
    '1.18.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +htslib.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install htslib.org' as const,
}

export type HtsliborgPackage = typeof htsliborgPackage
