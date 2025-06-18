/**
 * **cicada** - An old-school bash-like Unix shell written in Rust
 *
 * @domain `hugo.wang/cicada`
 * @programs `cicada`
 * @version `1.1.2` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cicada`
 * @name `cicada`
 * @dependencies `rust-lang.org^1.65`, `rust-lang.org/cargo`, `gnu.org/which`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cicada
 * // Or access via domain
 * const samePkg = pantry.hugowangcicada
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cicada"
 * console.log(pkg.description) // "An old-school bash-like Unix shell written in Rust"
 * console.log(pkg.programs)    // ["cicada"]
 * console.log(pkg.versions[0]) // "1.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hugo-wang/cicada.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cicadaPackage = {
  /**
   * The display name of this package.
   */
  name: 'cicada' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hugo.wang/cicada' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An old-school bash-like Unix shell written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hugo.wang/cicada/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install cicada' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cicada',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.65',
    'rust-lang.org/cargo',
    'gnu.org/which',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.2',
    '1.1.1',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.9.41',
    '0.9.40',
    '0.9.39',
    '0.9.38',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CicadaPackage = typeof cicadaPackage
