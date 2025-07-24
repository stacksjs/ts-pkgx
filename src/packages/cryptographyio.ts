/**
 * **cryptography.io** - Package from pantry: cryptography.io
 *
 * @domain `cryptography.io`
 *
 * @install `launchpad install cryptography.io`
 * @dependencies `python.org>=3.11`, `github.com/python-cffi/cffi^1.16`, `openssl.org>=1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cryptographyio
 * console.log(pkg.name)        // "cryptography.io"
 * console.log(pkg.description) // "Package from pantry: cryptography.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cryptography-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cryptographyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cryptography.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cryptography.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cryptography.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cryptography.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cryptography.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cryptography.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
    'github.com/python-cffi/cffi^1.16',
    'openssl.org>=1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cryptography.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CryptographyioPackage = typeof cryptographyioPackage
