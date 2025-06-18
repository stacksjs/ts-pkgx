/**
 * **crates.io/hac-client** - pkgx package
 *
 * @domain `crates.io/hac/client`
 *
 * @install `pkgx crates.io/hac-client`
 * @name `hac-client`
 * @aliases `crates.io/hac-client`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiohacclient
 * // Or access via domain
 * const samePkg = pantry.cratesiohacclient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hac-client"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/hac/client.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiohacclientPackage = {
  /**
   * The display name of this package.
   */
  name: 'hac-client' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/hac/client' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/hac-client' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/hac-client',
  ] as const,
  fullPath: 'crates.io/hac-client' as const,
}

export type CratesiohacclientPackage = typeof cratesiohacclientPackage
