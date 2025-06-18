/**
 * **xml** - Convert XML to another format (based on XSL or other tools)
 *
 * @domain `pagure.io/xmlto`
 * @programs `xmlif`, `xmlto`
 * @version `0.0.29` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/xmlto.md
 *
 * @install `sh <(curl https://pkgx.sh) +pagure.io/xmlto -- $SHELL -i`
 * @name `xml`
 * @aliases `xmlto`
 * @dependencies `docbook.org`, `github.com/util-linux/util-linux`, `darwingnome.org/libxslt`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xml
 * // Or access via domain
 * const samePkg = pantry.pagureioxmlto
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xml"
 * console.log(pkg.description) // "Convert XML to another format (based on XSL or ..."
 * console.log(pkg.programs)    // ["xmlif", "xmlto"]
 * console.log(pkg.versions[0]) // "0.0.29" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/xmlto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xmlPackage = {
  /**
   * The display name of this package.
   */
  name: 'xml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pagure.io/xmlto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Convert XML to another format (based on XSL or other tools)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/xmlto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pagure.io/xmlto -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xmlif',
    'xmlto',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'docbook.org',
    'github.com/util-linux/util-linux',
    'darwingnome.org/libxslt',
    'gnome.org/libxslt',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.29',
    '0.0.28',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xmlto',
  ] as const,
  fullPath: 'pagure.io/xmlto' as const,
}

export type XmlPackage = typeof xmlPackage
