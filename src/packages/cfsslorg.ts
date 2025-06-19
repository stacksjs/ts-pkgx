/**
 * **cfssl.org** - CFSSL: Cloudflare's PKI and TLS toolkit
 *
 * @domain `cfssl.org`
 * @programs `cfssl`, `cfssl-bundle`, `cfssl-certinfo`, `cfssl-newkey`, `cfssl-scan`, ... (+3 more)
 * @version `1.6.5` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +cfssl.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cfsslorg
 * console.log(pkg.name)        // "cfssl.org"
 * console.log(pkg.description) // "CFSSL: Cloudflare's PKI and TLS toolkit"
 * console.log(pkg.programs)    // ["cfssl", "cfssl-bundle", ...]
 * console.log(pkg.versions[0]) // "1.6.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cfssl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cfsslorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cfssl.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cfssl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CFSSL: Cloudflare\'s PKI and TLS toolkit' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cfssl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +cfssl.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cfssl',
    'cfssl-bundle',
    'cfssl-certinfo',
    'cfssl-newkey',
    'cfssl-scan',
    'cfssljson',
    'mkbundle',
    'multirootca',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.5',
  ] as const,
  aliases: [] as const,
}

export type CfsslorgPackage = typeof cfsslorgPackage
