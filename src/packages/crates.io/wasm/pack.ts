/**
 * **crates.io/wasm-pack** - pkgx package
 *
 * @domain `crates.io/wasm/pack`
 *
 * @install `pkgx crates.io/wasm-pack`
 * @name `wasm-pack`
 * @aliases `crates.io/wasm-pack`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiowasmpack
 * // Or access via domain
 * const samePkg = pantry.cratesiowasmpack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wasm-pack"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wasm/pack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiowasmpackPackage = {
  /**
   * The display name of this package.
   */
  name: 'wasm-pack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/wasm/pack' as const,
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
  installCommand: 'pkgx crates.io/wasm-pack' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/wasm-pack',
  ] as const,
  fullPath: 'crates.io/wasm-pack' as const,
}

export type CratesiowasmpackPackage = typeof cratesiowasmpackPackage
