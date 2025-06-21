/**
 * **openssh.com** - Package from pantry: openssh.com
 *
 * @domain `openssh.com`
 *
 * @install `launchpad install openssh.com`
 * @dependencies `nlnetlabs.nl/ldns`, `developers.yubico.com/libfido2`, `openssl.org`, ... (+5 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensshcom
 * console.log(pkg.name)        // "openssh.com"
 * console.log(pkg.description) // "Package from pantry: openssh.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openssh-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensshcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'openssh.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openssh.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openssh.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openssh.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'nlnetlabs.nl/ldns',
    'developers.yubico.com/libfido2',
    'openssl.org',
    'kerberos.org',
    'thrysoee.dk/editline',
    'github.com/besser82/libxcrypt',
    'zlib.net',
    'linux:linux-pam.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openssh.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpensshcomPackage = typeof opensshcomPackage
