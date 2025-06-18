/**
 * **joshuto** - ranger-like terminal file manager written in Rust
 *
 * @domain `crates.io/joshuto`
 * @programs `joshuto`
 * @version `0.9.9` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) joshuto`
 * @name `joshuto`
 * @dependencies `libgit2.org@1`
 * @companions `github.com/junegunn/fzf`, `crates.io/zoxide`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.joshuto
 * // Or access via domain
 * const samePkg = pantry.cratesiojoshuto
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "joshuto"
 * console.log(pkg.description) // "ranger-like terminal file manager written in Rust"
 * console.log(pkg.programs)    // ["joshuto"]
 * console.log(pkg.versions[0]) // "0.9.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/joshuto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const joshutoPackage = {
  /**
   * The display name of this package.
   */
  name: 'joshuto' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/joshuto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'ranger-like terminal file manager written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/joshuto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) joshuto' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'joshuto',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'github.com/junegunn/fzf',
    'crates.io/zoxide',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.9',
    '0.9.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/joshuto' as const,
}

export type JoshutoPackage = typeof joshutoPackage
