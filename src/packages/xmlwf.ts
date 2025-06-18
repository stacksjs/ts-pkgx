/**
 * **xmlwf** - :herb: Fast streaming XML parser written in C99 with >90% test coverage; moved from SourceForge to GitHub
 *
 * @domain `libexpat.github.io`
 * @programs `xmlwf`
 * @version `2.7.1` (9 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/libexpat-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) xmlwf`
 * @name `xmlwf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xmlwf
 * // Or access via domain
 * const samePkg = pantry.libexpatgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xmlwf"
 * console.log(pkg.description) // ":herb: Fast streaming XML parser written in C99..."
 * console.log(pkg.programs)    // ["xmlwf"]
 * console.log(pkg.versions[0]) // "2.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libexpat-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xmlwfPackage = {
  /**
   * The display name of this package.
   */
  name: 'xmlwf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libexpat.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':herb: Fast streaming XML parser written in C99 with >90% test coverage; moved from SourceForge to GitHub' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libexpat.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) xmlwf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xmlwf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.1',
    '2.7.0',
    '2.6.4',
    '2.6.3',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.0',
    '2.4.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'libexpat.github.io' as const,
}

export type XmlwfPackage = typeof xmlwfPackage
