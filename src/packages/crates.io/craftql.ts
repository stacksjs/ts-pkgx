/**
 * **craftql** - A CLI tool to visualize GraphQL schemas and to output a graph data structure as a graphviz .dot format
 *
 * @domain `crates.io/craftql`
 * @programs `craftql`
 * @version `0.2.20` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) craftql`
 * @name `craftql`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.craftql
 * // Or access via domain
 * const samePkg = pantry.cratesiocraftql
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "craftql"
 * console.log(pkg.description) // "A CLI tool to visualize GraphQL schemas and to ..."
 * console.log(pkg.programs)    // ["craftql"]
 * console.log(pkg.versions[0]) // "0.2.20" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/craftql.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const craftqlPackage = {
  /**
   * The display name of this package.
   */
  name: 'craftql' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/craftql' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A CLI tool to visualize GraphQL schemas and to output a graph data structure as a graphviz .dot format' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/craftql/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) craftql' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'craftql',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.20',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/craftql' as const,
}

export type CraftqlPackage = typeof craftqlPackage
