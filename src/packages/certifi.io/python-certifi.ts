/**
 * **python-certifi** - Package from pantry: certifi.io/python-certifi
 *
 * @domain `certifi.io/python-certifi`
 *
 * @install `launchpad install certifi.io/python-certifi`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.certifiiopythoncertifi
 * console.log(pkg.name)        // "python-certifi"
 * console.log(pkg.description) // "Package from pantry: certifi.io/python-certifi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certifi-io/python-certifi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const certifiiopythoncertifiPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-certifi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'certifi.io/python-certifi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: certifi.io/python-certifi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install certifi.io/python-certifi' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +certifi.io/python-certifi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install certifi.io/python-certifi' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/certifi.io/python-certifi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CertifiiopythoncertifiPackage = typeof certifiiopythoncertifiPackage
