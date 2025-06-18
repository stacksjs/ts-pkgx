/**
 * **surrealdb.com** - Package from pantry: surrealdb.com
 *
 * @domain `surrealdb.com`
 *
 * @install `launchpad install surrealdb.com`
 * @dependencies `openssl.org^1`, `rust-lang.org>=1.60`, `rust-lang.org/cargo`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.surrealdbcom
 * console.log(pkg.name)        // "surrealdb.com"
 * console.log(pkg.description) // "Package from pantry: surrealdb.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/surrealdb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const surrealdbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'surrealdb.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'surrealdb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: surrealdb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install surrealdb.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
    'rust-lang.org>=1.60',
    'rust-lang.org/cargo',
    'freedesktop.org/pkg-config^0.29',
    'gnu.org/patch',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/surrealdb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SurrealdbcomPackage = typeof surrealdbcomPackage
