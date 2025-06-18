/**
 * **crates.io/kaspa-miner** - pkgx package
 *
 * @domain `crates.io/kaspa/miner`
 *
 * @install `pkgx crates.io/kaspa-miner`
 * @name `kaspa-miner`
 * @aliases `crates.io/kaspa-miner`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiokaspaminer
 * // Or access via domain
 * const samePkg = pantry.cratesiokaspaminer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kaspa-miner"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/kaspa/miner.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiokaspaminerPackage = {
  /**
   * The display name of this package.
   */
  name: 'kaspa-miner' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/kaspa/miner' as const,
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
  installCommand: 'pkgx crates.io/kaspa-miner' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/kaspa-miner',
  ] as const,
  fullPath: 'crates.io/kaspa-miner' as const,
}

export type CratesiokaspaminerPackage = typeof cratesiokaspaminerPackage
