/**
 * **typst** - A new markup-based typesetting system that is powerful and easy to learn.
 *
 * @domain `typst.app`
 * @programs `typst`
 * @version `0.13.1` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install typst`
 * @aliases `typst`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.typst
 * // Or access via domain
 * const samePkg = pantry.typstapp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "typst.app"
 * console.log(pkg.description) // "A new markup-based typesetting system that is p..."
 * console.log(pkg.programs)    // ["typst"]
 * console.log(pkg.versions[0]) // "0.13.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/typst-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const typstPackage = {
  /**
   * The display name of this package.
   */
  name: 'typst.app' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'typst.app' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A new markup-based typesetting system that is powerful and easy to learn.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/typst.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install typst' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'typst',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.1',
    '0.13.0',
    '0.12.0',
    '0.11.1',
    '0.11.0',
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.0',
    '0.6.0',
    '0.5.0',
    '0.4.0',
    '0.2.0',
    '0.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'typst',
  ] as const,
}

export type TypstPackage = typeof typstPackage
