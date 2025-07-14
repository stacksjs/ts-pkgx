/**
 * **htslib.org** - Package from pantry: htslib.org
 *
 * @domain `htslib.org`
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
 * console.log(pkg.description) // "Package from pantry: htslib.org"
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
  description: 'Package from pantry: htslib.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install htslib.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +htslib.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install htslib.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/htslib.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HtsliborgPackage = typeof htsliborgPackage
