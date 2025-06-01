/**
 * **mkdocs** - Project documentation with Markdown.
 *
 * @domain `mkdocs.org`
 * @programs `mkdocs`
 * @version `1.6.1` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/mkdocs-org.md
 *
 * @install `sh <(curl https://pkgx.sh) mkdocs`
 * @name `mkdocs`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mkdocs
 * // Or access via domain
 * const samePkg = pantry.mkdocsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mkdocs"
 * console.log(pkg.description) // "Project documentation with Markdown."
 * console.log(pkg.programs)    // ["mkdocs"]
 * console.log(pkg.versions[0]) // "1.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mkdocs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mkdocsPackage = {
  /**
   * The display name of this package.
   */
  name: 'mkdocs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mkdocs.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Project documentation with Markdown.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mkdocs.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mkdocs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mkdocs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.1',
    '1.6.0',
    '1.5.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'mkdocs.org' as const,
}

export type MkdocsPackage = typeof mkdocsPackage
