/**
 * **kerberos.org** - mirror of MIT krb5 repository
 *
 * @domain `kerberos.org`
 * @programs `compile_et`, `gss-client`, `k5srvutil`, `kadmin`, `kdestroy`, ... (+22 more)
 * @version `1.22.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kerberos.org`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kerberosorg
 * console.log(pkg.name)        // "kerberos.org"
 * console.log(pkg.description) // "mirror of MIT krb5 repository"
 * console.log(pkg.programs)    // ["compile_et", "gss-client", ...]
 * console.log(pkg.versions[0]) // "1.22.1" (latest)
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
  description: 'mirror of MIT krb5 repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kerberos.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kerberos.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'compile_et',
    'gss-client',
    'k5srvutil',
    'kadmin',
    'kdestroy',
    'kinit',
    'klist',
    'kpasswd',
    'krb5-config',
    'kswitch',
    'ktutil',
    'kvno',
    'sclient',
    'sim_client',
    'uuclient',
    'gss-server',
    'kadmin.local',
    'kadmind',
    'kdb5_util',
    'kprop',
    'kpropd',
    'kproplog',
    'krb5-send-pr',
    'krb5kdc',
    'sim_server',
    'sserver',
    'uuserver',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.22.1',
    '1.22.0',
    '1.21.3',
    '1.21.2',
    '1.21.1',
    '1.21.0',
    '1.20.2',
    '1.20.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kerberos.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kerberos.org' as const,
}

export type KerberosorgPackage = typeof kerberosorgPackage
