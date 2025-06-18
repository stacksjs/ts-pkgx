/**
 * **dbtoepub** - XML vocabulary to create presentation-neutral documents
 *
 * @domain `docbook.org/xsl`
 * @programs `dbtoepub`
 * @version `1.79.2` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/docbook-org/xsl.md
 *
 * @install `sh <(curl https://pkgx.sh) dbtoepub`
 * @name `docbook-xsl`
 * @aliases `dbtoepub`, `xsl`
 * @dependencies `docbook.org^5`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.dbtoepub
 * // Or access via domain
 * const samePkg = pantry.docbookorgxsl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "docbook-xsl"
 * console.log(pkg.description) // "XML vocabulary to create presentation-neutral d..."
 * console.log(pkg.programs)    // ["dbtoepub"]
 * console.log(pkg.versions[0]) // "1.79.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docbook-org/xsl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dbtoepubPackage = {
  /**
   * The display name of this package.
   */
  name: 'docbook-xsl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docbook.org/xsl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'XML vocabulary to create presentation-neutral documents' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docbook.org/xsl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dbtoepub' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dbtoepub',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'docbook.org^5',
    'gnome.org/libxml2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.79.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'dbtoepub',
    'xsl',
  ] as const,
  fullPath: 'docbook.org/xsl' as const,
}

export type DbtoepubPackage = typeof dbtoepubPackage
