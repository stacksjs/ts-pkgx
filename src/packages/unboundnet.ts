/**
 * **unbound.net** - Package from pantry: unbound.net
 *
 * @domain `unbound.net`
 *
 * @install `launchpad install unbound.net`
 * @dependencies `openssl.org^1`, `libexpat.github.io`, `github.com/westes/flex`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unboundnet
 * console.log(pkg.name)        // "unbound.net"
 * console.log(pkg.description) // "Package from pantry: unbound.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unbound-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unboundnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'unbound.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unbound.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: unbound.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install unbound.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
    'libexpat.github.io',
    'github.com/westes/flex',
    'gnu.org/bison^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unbound.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type UnboundnetPackage = typeof unboundnetPackage
