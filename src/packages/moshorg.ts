/**
 * **mosh.org** - Package from pantry: mosh.org
 *
 * @domain `mosh.org`
 *
 * @install `launchpad install mosh.org`
 * @dependencies `protobuf.dev^26.1.0`, `invisible-island.net/ncurses^6`, `zlib.net^1.3`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.moshorg
 * console.log(pkg.name)        // "mosh.org"
 * console.log(pkg.description) // "Package from pantry: mosh.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mosh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moshorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mosh.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mosh.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mosh.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mosh.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev^26.1.0',
    'invisible-island.net/ncurses^6',
    'zlib.net^1.3',
    'openssl.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mosh.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MoshorgPackage = typeof moshorgPackage
