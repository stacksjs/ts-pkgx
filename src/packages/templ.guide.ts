/**
 * **templ** - A language for writing HTML user interfaces in Go.
 *
 * @domain `templ.guide`
 * @programs `templ`
 * @version `0.3.887` (25 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/templ-guide.md
 * @install `sh <(curl https://pkgx.sh) templ`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.templguide
 * console.log(pkg.name)        // "templ"
 * console.log(pkg.description) // "A language for writing HTML user interfaces in Go."
 * console.log(pkg.programs)    // ["templ"]
 * console.log(pkg.versions[0]) // "0.3.887" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/templ-guide.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const templguidePackage = {
  /**
   * The display name of this package.
   */
  name: 'templ' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'templ.guide' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A language for writing HTML user interfaces in Go.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/templ.guide/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) templ' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'templ',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.887',
    '0.3.865',
    '0.3.857',
    '0.3.856',
    '0.3.850',
    '0.3.833',
    '0.3.819',
    '0.2.793',
    '0.2.778',
    '0.2.771',
    '0.2.747',
    '0.2.742',
    '0.2.731',
    '0.2.707',
    '0.2.697',
    '0.2.680',
    '0.2.663',
    '0.2.648',
    '0.2.646',
    '0.2.639',
    '0.2.598',
    '0.2.543',
    '0.2.513',
    '0.2.501',
    '0.2.476',
  ] as const,
  fullPath: 'templ.guide' as const,
  aliases: [] as const,
}

export type TemplguidePackage = typeof templguidePackage
