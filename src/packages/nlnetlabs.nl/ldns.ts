/**
 * **ldns** - LDNS is a DNS library that facilitates DNS tool programming
 *
 * @domain `nlnetlabs.nl/ldns`
 * @programs `drill`, `ldns-config`
 * @version `1.8.4` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +nlnetlabs.nl/ldns -- $SHELL -i`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nlnetlabsnlldns
 * console.log(pkg.name)        // "ldns"
 * console.log(pkg.description) // "LDNS is a DNS library that facilitates DNS tool..."
 * console.log(pkg.programs)    // ["drill", "ldns-config"]
 * console.log(pkg.versions[0]) // "1.8.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nlnetlabs-nl/ldns.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nlnetlabsnlldnsPackage = {
  /**
   * The display name of this package.
   */
  name: 'ldns' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +nlnetlabs.nl/ldns -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type NlnetlabsnlldnsPackage = typeof nlnetlabsnlldnsPackage
