/**
 * **rust-script** - Run Rust files and expressions as scripts without any setup or compilation step.
 *
 * @domain `rust-script.org`
 * @programs `rust-script`
 * @version `0.35.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) rust-script`
 * @name `rust-script`
 * @companions `rust-lang.org`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rustscript
 * // Or access via domain
 * const samePkg = pantry.rustscriptorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rust-script"
 * console.log(pkg.description) // "Run Rust files and expressions as scripts witho..."
 * console.log(pkg.programs)    // ["rust-script"]
 * console.log(pkg.versions[0]) // "0.35.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-script-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustscriptPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust-script' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-script.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Run Rust files and expressions as scripts without any setup or compilation step.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-script.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) rust-script' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rust-script',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'rust-lang.org',
    'rust-lang.org/cargo',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.35.0',
    '0.34.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rust-script.org' as const,
}

export type RustscriptPackage = typeof rustscriptPackage
