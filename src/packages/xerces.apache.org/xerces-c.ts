/**
 * **xerces-c** - Validating XML parser
 *
 * @domain `xerces.apache.org/xerces-c`
 * @programs `CreateDOMDocument`, `DOMCount`, `DOMPrint`, `EnumVal`, `PParse`, ... (+10 more)
 * @version `3.3.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +xerces.apache.org/xerces-c -- $SHELL -i`
 * @aliases `xerces-c`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xercesc
 * // Or access via domain
 * const samePkg = pantry.xercesapacheorgxercesc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xerces.apache.org/xerces-c"
 * console.log(pkg.description) // "Validating XML parser"
 * console.log(pkg.programs)    // ["CreateDOMDocument", "DOMCount", ...]
 * console.log(pkg.versions[0]) // "3.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xerces-apache-org/xerces-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xercescPackage = {
  /**
   * The display name of this package.
   */
  name: 'xerces.apache.org/xerces-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xerces.apache.org/xerces-c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Validating XML parser' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xerces.apache.org/xerces-c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +xerces.apache.org/xerces-c -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'CreateDOMDocument',
    'DOMCount',
    'DOMPrint',
    'EnumVal',
    'PParse',
    'PSVIWriter',
    'Redirect',
    'SAX2Count',
    'SAX2Print',
    'SAXCount',
    'SAXPrint',
    'SCMPrint',
    'SEnumVal',
    'StdInParse',
    'XInclude',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.0',
    '3.2.5',
    '3.2.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xerces-c',
  ] as const,
  fullPath: 'xerces.apache.org/xerces-c' as const,
}

export type XercescPackage = typeof xercescPackage
