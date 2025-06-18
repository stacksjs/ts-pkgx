/**
 * **scriptisto** - A language-agnostic "shebang interpreter" that enables you to write scripts in compiled languages.
 *
 * @domain `github.com/igor-petruk/scriptisto`
 * @programs `scriptisto`
 * @version `2.2.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) scriptisto`
 * @name `Scriptisto`
 * @aliases `scriptisto`, `igor-petruk/scriptisto`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.scriptisto
 * // Or access via domain
 * const samePkg = pantry.githubcomigorpetrukscriptisto
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Scriptisto"
 * console.log(pkg.description) // "A language-agnostic "shebang interpreter" that ..."
 * console.log(pkg.programs)    // ["scriptisto"]
 * console.log(pkg.versions[0]) // "2.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igor-petruk/scriptisto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scriptistoPackage = {
  /**
   * The display name of this package.
   */
  name: 'Scriptisto' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/igor-petruk/scriptisto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A language-agnostic "shebang interpreter" that enables you to write scripts in compiled languages.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/igor-petruk/scriptisto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) scriptisto' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scriptisto',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.0',
    '2.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'scriptisto',
    'igor-petruk/scriptisto',
  ] as const,
  fullPath: 'github.com/igor-petruk/scriptisto' as const,
}

export type ScriptistoPackage = typeof scriptistoPackage
