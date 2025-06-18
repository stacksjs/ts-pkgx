/**
 * **nmap.org** - Package from pantry: nmap.org
 *
 * @domain `nmap.org`
 *
 * @install `launchpad install nmap.org`
 * @dependencies `openssl.org^1.1`, `pcre.org/v2^10`, `gnu.org/patch`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nmaporg
 * console.log(pkg.name)        // "nmap.org"
 * console.log(pkg.description) // "Package from pantry: nmap.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nmap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nmaporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nmap.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nmap.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nmap.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install nmap.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'pcre.org/v2^10',
    'gnu.org/patch',
    'python.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nmap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NmaporgPackage = typeof nmaporgPackage
