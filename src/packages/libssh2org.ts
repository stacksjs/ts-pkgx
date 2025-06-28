/**
 * **libssh2.org** - Package from pantry: libssh2.org
 *
 * @domain `libssh2.org`
 *
 * @install `launchpad install libssh2.org`
 * @dependencies `openssl.org^1.1`, `zlib.net^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libssh2org
 * console.log(pkg.name)        // "libssh2.org"
 * console.log(pkg.description) // "Package from pantry: libssh2.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libssh2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libssh2orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libssh2.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libssh2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libssh2.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libssh2.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libssh2.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libssh2.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libssh2.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Libssh2orgPackage = typeof libssh2orgPackage
