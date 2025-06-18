/**
 * **ldns** - LDNS is a DNS library that facilitates DNS tool programming
 *
 * @domain `nlnetlabs.nl/ldns`
 * @programs `drill`, `ldns-config`
 * @version `1.8.4` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/nlnetlabs-nl/ldns.md
 *
 * @install `sh <(curl https://pkgx.sh) +nlnetlabs.nl/ldns -- $SHELL -i`
 * @aliases `ldns`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ldns
 * // Or access via domain
 * const samePkg = pantry.nlnetlabsnlldns
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nlnetlabs.nl/ldns"
 * console.log(pkg.description) // "LDNS is a DNS library that facilitates DNS tool..."
 * console.log(pkg.programs)    // ["drill", "ldns-config"]
 * console.log(pkg.versions[0]) // "1.8.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nlnetlabs-nl/ldns.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ldnsPackage = {
  /**
   * The display name of this package.
   */
  name: 'nlnetlabs.nl/ldns' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nlnetlabs.nl/ldns' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'LDNS is a DNS library that facilitates DNS tool programming' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nlnetlabs.nl/ldns/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +nlnetlabs.nl/ldns -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'drill',
    'ldns-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.4',
    '1.8.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ldns',
  ] as const,
  fullPath: 'nlnetlabs.nl/ldns' as const,
}

export type LdnsPackage = typeof ldnsPackage
