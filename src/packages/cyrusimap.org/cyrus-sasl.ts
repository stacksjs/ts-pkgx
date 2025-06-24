/**
 * **cyrus-sasl** - Package from pantry: cyrusimap.org/cyrus-sasl
 *
 * @domain `cyrusimap.org/cyrus-sasl`
 *
 * @install `launchpad install cyrusimap.org/cyrus-sasl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cyrusimaporgcyrussasl
 * console.log(pkg.name)        // "cyrus-sasl"
 * console.log(pkg.description) // "Package from pantry: cyrusimap.org/cyrus-sasl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cyrusimap-org/cyrus-sasl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cyrusimaporgcyrussaslPackage = {
  /**
   * The display name of this package.
   */
  name: 'cyrus-sasl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cyrusimap.org/cyrus-sasl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cyrusimap.org/cyrus-sasl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cyrusimap.org/cyrus-sasl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cyrusimap.org/cyrus-sasl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cyrusimap.org/cyrus-sasl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cyrusimap.org/cyrus-sasl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CyrusimaporgcyrussaslPackage = typeof cyrusimaporgcyrussaslPackage
