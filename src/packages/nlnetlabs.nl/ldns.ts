/**
 * **ldns** - Package from pantry: nlnetlabs.nl/ldns
 *
 * @domain `nlnetlabs.nl/ldns`
 *
 * @install `launchpad install nlnetlabs.nl/ldns`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nlnetlabsnlldns
 * console.log(pkg.name)        // "ldns"
 * console.log(pkg.description) // "Package from pantry: nlnetlabs.nl/ldns"
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
  description: 'Package from pantry: nlnetlabs.nl/ldns' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nlnetlabs.nl/ldns' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nlnetlabs.nl/ldns -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nlnetlabs.nl/ldns' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nlnetlabs.nl/ldns/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NlnetlabsnlldnsPackage = typeof nlnetlabsnlldnsPackage
