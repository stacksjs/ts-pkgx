/**
 * **oci-cli** - Package from pantry: oracle.com/oci-cli
 *
 * @domain `oracle.com/oci-cli`
 *
 * @install `launchpad install oracle.com/oci-cli`
 * @dependencies `certifi.io/python-certifi^2024`, `pyyaml.org/libyaml^0.2`, `cryptography.io^42`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oraclecomocicli
 * console.log(pkg.name)        // "oci-cli"
 * console.log(pkg.description) // "Package from pantry: oracle.com/oci-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oracle-com/oci-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oraclecomocicliPackage = {
  /**
   * The display name of this package.
   */
  name: 'oci-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oracle.com/oci-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: oracle.com/oci-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oracle.com/oci-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +oracle.com/oci-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oracle.com/oci-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'certifi.io/python-certifi^2024',
    'pyyaml.org/libyaml^0.2',
    'cryptography.io^42',
    'python.org^3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oracle.com/oci-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OraclecomocicliPackage = typeof oraclecomocicliPackage
