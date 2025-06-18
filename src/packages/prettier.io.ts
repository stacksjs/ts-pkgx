/**
 * **prettier** - Code formatter for JavaScript, CSS, JSON, GraphQL, Markdown, YAML
 *
 * @domain `prettier.io`
 * @programs `prettier`
 * @version `3.5.3` (12 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/prettier-io.md
 *
 * @install `sh <(curl https://pkgx.sh) prettier`
 * @name `prettier`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.prettier
 * // Or access via domain
 * const samePkg = pantry.prettierio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "prettier"
 * console.log(pkg.description) // "Code formatter for JavaScript, CSS, JSON, Graph..."
 * console.log(pkg.programs)    // ["prettier"]
 * console.log(pkg.versions[0]) // "3.5.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prettier-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prettierPackage = {
  /**
   * The display name of this package.
   */
  name: 'prettier' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prettier.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Code formatter for JavaScript, CSS, JSON, GraphQL, Markdown, YAML' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/prettier.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) prettier' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'prettier',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.3',
    '3.5.2',
    '3.5.1',
    '3.5.0',
    '3.4.2',
    '3.4.1',
    '3.4.0',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'prettier.io' as const,
}

export type PrettierPackage = typeof prettierPackage
