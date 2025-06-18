/**
 * **wasm-pack** - 📦✨ your favorite rust -> wasm workflow tool!
 *
 * @domain `crates.io/wasm-pack`
 * @programs `wasm-pack`
 * @version `0.13.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) wasm-pack`
 * @name `wasm-pack`
 * @dependencies `rust-lang.org`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wasmpack
 * // Or access via domain
 * const samePkg = pantry.cratesiowasmpack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wasm-pack"
 * console.log(pkg.description) // "📦✨ your favorite rust -> wasm workflow tool!"
 * console.log(pkg.programs)    // ["wasm-pack"]
 * console.log(pkg.versions[0]) // "0.13.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wasm-pack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wasmpackPackage = {
  /**
   * The display name of this package.
   */
  name: 'wasm-pack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/wasm-pack' as const,
  /**
   * Brief description of what this package does.
   */
  description: '📦✨ your favorite rust -> wasm workflow tool!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/wasm-pack/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) wasm-pack' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wasm-pack',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.1',
    '0.13.0',
    '0.12.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/wasm-pack' as const,
}

export type WasmpackPackage = typeof wasmpackPackage
