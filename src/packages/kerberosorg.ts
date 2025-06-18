/**
 * **kerberos.org** - Package from pantry: kerberos.org
 *
 * @domain `kerberos.org`
 *
 * @install `launchpad install kerberos.org`
 * @dependencies `openssl.org^1.1`, `gnu.org/bison^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kerberosorg
 * console.log(pkg.name)        // "kerberos.org"
 * console.log(pkg.description) // "Package from pantry: kerberos.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kerberos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kerberosorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'kerberos.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kerberos.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kerberos.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kerberos.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'gnu.org/bison^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kerberos.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KerberosorgPackage = typeof kerberosorgPackage
