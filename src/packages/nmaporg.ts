/**
 * **nmap.org** - Port scanning utility for large networks
 *
 * @domain `nmap.org`
 * @programs `nmap`, `ncat`, `nping`
 * @version `7.97.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +nmap.org -- $SHELL -i`
 * @dependencies `openssl.org^1.1`, `pcre.org/v2^10`, `gnu.org/patch`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nmaporg
 * console.log(pkg.name)        // "nmap.org"
 * console.log(pkg.description) // "Port scanning utility for large networks"
 * console.log(pkg.programs)    // ["nmap", "ncat", ...]
 * console.log(pkg.versions[0]) // "7.97.0" (latest)
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
  description: 'Port scanning utility for large networks' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nmap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +nmap.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nmap',
    'ncat',
    'nping',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'pcre.org/v2^10',
    'gnu.org/patch',
    'python.org@3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.97.0',
    '7.96.0',
    '7.95.0',
    '7.94.0',
    '7.93.0',
  ] as const,
  aliases: [] as const,
}

export type NmaporgPackage = typeof nmaporgPackage
