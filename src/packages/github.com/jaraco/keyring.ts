/**
 * **keyring** - Easy way to access the system keyring service from python
 *
 * @domain `github.com/jaraco/keyring`
 * @programs `keyring`
 * @version `25.6.0` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install keyring`
 * @name `keyring`
 * @dependencies `pkgx.sh^1`, `github.com/python-cffi/cffi^1.16`, `github.com/eliben/pycparser^2.21`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.keyring
 * // Or access via domain
 * const samePkg = pantry.githubcomjaracokeyring
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "keyring"
 * console.log(pkg.description) // "Easy way to access the system keyring service f..."
 * console.log(pkg.programs)    // ["keyring"]
 * console.log(pkg.versions[0]) // "25.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jaraco/keyring.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const keyringPackage = {
  /**
   * The display name of this package.
   */
  name: 'keyring' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jaraco/keyring' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Easy way to access the system keyring service from python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jaraco/keyring/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/jaraco/keyring' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install keyring' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'keyring',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'github.com/python-cffi/cffi^1.16',
    'github.com/eliben/pycparser^2.21',
    'cryptography.io^42',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.6.0',
    '25.5.0',
    '25.4.1',
    '25.4.0',
    '25.3.0',
    '25.2.1',
    '25.2.0',
    '25.1.0',
    '25.0.1',
    '25.0.0',
    '24.3.1',
    '24.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) keyring -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install keyring' as const,
}

export type KeyringPackage = typeof keyringPackage
