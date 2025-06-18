/**
 * **prql-lang.org** - Package from pantry: prql-lang.org
 *
 * @domain `prql-lang.org`
 *
 * @install `launchpad install prql-lang.org`
 * @dependencies `rust-lang.org^1.65`, `rust-lang.org/cargo`, `llvm.org^18 # 19 has template issues with duckdb build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prqllangorg
 * console.log(pkg.name)        // "prql-lang.org"
 * console.log(pkg.description) // "Package from pantry: prql-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prql-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prqllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'prql-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prql-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: prql-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install prql-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.65',
    'rust-lang.org/cargo',
    'llvm.org^18 # 19 has template issues with duckdb build',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/prql-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PrqllangorgPackage = typeof prqllangorgPackage
