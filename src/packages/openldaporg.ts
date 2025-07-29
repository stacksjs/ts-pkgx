/**
 * **openldap.org** - Package from pantry: openldap.org
 *
 * @domain `openldap.org`
 *
 * @install `launchpad install openldap.org`
 * @dependencies `openssl.org^1.1`, `linux:github.com/util-linux/util-linux` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openldaporg
 * console.log(pkg.name)        // "openldap.org"
 * console.log(pkg.description) // "Package from pantry: openldap.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openldap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openldaporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openldap.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openldap.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openldap.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openldap.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openldap.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openldap.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org^1.1',
    'linux:github.com/util-linux/util-linux',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenldaporgPackage = typeof openldaporgPackage
