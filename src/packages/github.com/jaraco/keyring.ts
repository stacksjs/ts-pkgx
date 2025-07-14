/**
 * **keyring** - Package from pantry: github.com/jaraco/keyring
 *
 * @domain `github.com/jaraco/keyring`
 *
 * @install `launchpad install github.com/jaraco/keyring`
 * @dependencies `pkgx.sh^1`, `github.com/python-cffi/cffi^1.16`, `github.com/eliben/pycparser^2.21`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjaracokeyring
 * console.log(pkg.name)        // "keyring"
 * console.log(pkg.description) // "Package from pantry: github.com/jaraco/keyring"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jaraco/keyring.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjaracokeyringPackage = {
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
  description: 'Package from pantry: github.com/jaraco/keyring' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jaraco/keyring' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jaraco/keyring -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jaraco/keyring' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jaraco/keyring/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjaracokeyringPackage = typeof githubcomjaracokeyringPackage
