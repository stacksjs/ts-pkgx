/**
 * **md2html** - C Markdown parser. Fast. SAX-like interface. Compliant to CommonMark specification.
 *
 * @domain `github.com/mity/md4c`
 * @programs `md2html`
 * @version `0.5.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) md2html`
 * @name `md2html`
 * @aliases `mity/md4c`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.md2html
 * // Or access via domain
 * const samePkg = pantry.githubcommitymd4c
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "md2html"
 * console.log(pkg.description) // "C Markdown parser. Fast. SAX-like interface. Co..."
 * console.log(pkg.programs)    // ["md2html"]
 * console.log(pkg.versions[0]) // "0.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mity/md4c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const md2htmlPackage = {
  /**
   * The display name of this package.
   */
  name: 'md2html' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mity/md4c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C Markdown parser. Fast. SAX-like interface. Compliant to CommonMark specification.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mity/md4c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) md2html' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'md2html',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mity/md4c',
  ] as const,
  fullPath: 'github.com/mity/md4c' as const,
}

export type Md2htmlPackage = typeof md2htmlPackage
