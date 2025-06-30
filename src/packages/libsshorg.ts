/**
 * **libssh.org** - Package from pantry: libssh.org
 *
 * @domain `libssh.org`
 *
 * @install `launchpad install libssh.org`
 * @dependencies `openssl.org^1.1`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsshorg
 * console.log(pkg.name)        // "libssh.org"
 * console.log(pkg.description) // "Package from pantry: libssh.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libssh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsshorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libssh.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libssh.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libssh.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libssh.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libssh.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libssh.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libssh.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibsshorgPackage = typeof libsshorgPackage
