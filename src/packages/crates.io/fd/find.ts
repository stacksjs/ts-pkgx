/**
 * **crates.io/fd-find** - pkgx package
 *
 * @domain `crates.io/fd/find`
 *
 * @install `pkgx crates.io/fd-find`
 * @name `fd-find`
 * @aliases `crates.io/fd-find`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiofdfind
 * // Or access via domain
 * const samePkg = pantry.cratesiofdfind
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fd-find"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fd/find.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiofdfindPackage = {
  /**
   * The display name of this package.
   */
  name: 'fd-find' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fd/find' as const,
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
  installCommand: 'pkgx crates.io/fd-find' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/fd-find',
  ] as const,
  fullPath: 'crates.io/fd-find' as const,
}

export type CratesiofdfindPackage = typeof cratesiofdfindPackage
