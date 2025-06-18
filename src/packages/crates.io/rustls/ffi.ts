/**
 * **crates.io/rustls-ffi** - pkgx package
 *
 * @domain `crates.io/rustls/ffi`
 *
 * @install `pkgx crates.io/rustls-ffi`
 * @name `rustls-ffi`
 * @aliases `crates.io/rustls-ffi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiorustlsffi
 * // Or access via domain
 * const samePkg = pantry.cratesiorustlsffi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rustls-ffi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rustls/ffi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiorustlsffiPackage = {
  /**
   * The display name of this package.
   */
  name: 'rustls-ffi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rustls/ffi' as const,
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
  installCommand: 'pkgx crates.io/rustls-ffi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/rustls-ffi',
  ] as const,
  fullPath: 'crates.io/rustls-ffi' as const,
}

export type CratesiorustlsffiPackage = typeof cratesiorustlsffiPackage
