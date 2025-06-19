/**
 * **tidy** - The granddaddy of HTML tools, with support for modern standards
 *
 * @domain `html-tidy.org`
 * @programs `tidy`
 * @version `5.8.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tidy`
 * @aliases `tidy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tidy
 * // Or access via domain
 * const samePkg = pantry.htmltidyorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "html-tidy.org"
 * console.log(pkg.description) // "The granddaddy of HTML tools, with support for ..."
 * console.log(pkg.programs)    // ["tidy"]
 * console.log(pkg.versions[0]) // "5.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/html-tidy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tidyPackage = {
  /**
   * The display name of this package.
   */
  name: 'html-tidy.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'html-tidy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The granddaddy of HTML tools, with support for modern standards' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/html-tidy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tidy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tidy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tidy',
  ] as const,
}

export type TidyPackage = typeof tidyPackage
