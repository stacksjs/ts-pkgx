/**
 * **templ** - A language for writing HTML user interfaces in Go.
 *
 * @domain `templ.guide`
 * @programs `templ`
 * @version `0.3.937` (31 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install templ`
 * @name `templ`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.templ
 * // Or access via domain
 * const samePkg = pantry.templguide
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "templ"
 * console.log(pkg.description) // "A language for writing HTML user interfaces in Go."
 * console.log(pkg.programs)    // ["templ"]
 * console.log(pkg.versions[0]) // "0.3.937" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/templ-guide.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const templPackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install templ' as const,
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
    '0.3.937',
    '0.3.924',
    '0.3.920',
    '0.3.906',
    '0.3.898',
    '0.3.894',
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) templ -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install templ' as const,
}

export type TemplPackage = typeof templPackage
