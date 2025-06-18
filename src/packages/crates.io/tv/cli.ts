/**
 * **crates.io/tv-cli** - pkgx package
 *
 * @domain `crates.io/tv/cli`
 *
 * @install `pkgx crates.io/tv-cli`
 * @name `tv-cli`
 * @aliases `crates.io/tv-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiotvcli
 * // Or access via domain
 * const samePkg = pantry.cratesiotvcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tv-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tv/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotvcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'tv-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tv/cli' as const,
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
  installCommand: 'pkgx crates.io/tv-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/tv-cli',
  ] as const,
  fullPath: 'crates.io/tv-cli' as const,
}

export type CratesiotvcliPackage = typeof cratesiotvcliPackage
