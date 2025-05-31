/**
 * **prql** - PRQL is a modern language for transforming data — a simple, powerful, pipelined SQL replacement
 *
 * @domain `prql-lang.org`
 * @programs `prql-compiler`, `prqlc`
 * @version `0.13.4` (33 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/prql-lang-org.md
 * @install `sh <(curl https://pkgx.sh) +prql-lang.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prql-langorg
 * console.log(pkg.name)        // "prql"
 * console.log(pkg.description) // "PRQL is a modern language for transforming data..."
 * console.log(pkg.programs)    // ["prql-compiler", "prqlc"]
 * console.log(pkg.versions[0]) // "0.13.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prql-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prqllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'prql' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prql-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'PRQL is a modern language for transforming data — a simple, powerful, pipelined SQL replacement' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/prql-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +prql-lang.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'prql-compiler',
    'prqlc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.4',
    '0.13.3',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.2',
    '0.12.1',
    '0.12.0',
    '0.11.4',
    '0.11.3',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.1',
    '0.10.0',
    '0.9.5',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.1',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.1',
    '0.6.0',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.1',
  ] as const,
  fullPath: 'prql-lang.org' as const,
  aliases: [] as const,
}

export type PrqllangorgPackage = typeof prqllangorgPackage
