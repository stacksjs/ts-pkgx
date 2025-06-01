/**
 * **micro** - A modern and intuitive terminal-based text editor
 *
 * @domain `micro-editor.github.io`
 * @programs `micro`
 * @version `2.0.14` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/micro-editor-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) micro`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microeditorgithubio
 * console.log(pkg.name)        // "micro"
 * console.log(pkg.description) // "A modern and intuitive terminal-based text editor"
 * console.log(pkg.programs)    // ["micro"]
 * console.log(pkg.versions[0]) // "2.0.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/micro-editor-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microeditorgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'micro' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'micro-editor.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A modern and intuitive terminal-based text editor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/micro-editor.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) micro' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'micro',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.14',
    '2.0.13',
    '2.0.12',
    '2.0.11',
  ] as const,
  fullPath: 'micro-editor.github.io' as const,
  aliases: [] as const,
}

export type MicroeditorgithubioPackage = typeof microeditorgithubioPackage
