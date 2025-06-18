/**
 * **cookiecutter** - A cross-platform command-line utility that creates projects from cookiecutters (project templates), e.g. Python package projects, C projects.
 *
 * @domain `github.com/cookiecutter/cookiecutter`
 * @programs `cookiecutter`
 * @version `2.6.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cookiecutter`
 * @name `cookiecutter`
 * @dependencies `pkgx.sh^1`, `python.org~3.12`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cookiecutter
 * // Or access via domain
 * const samePkg = pantry.githubcomcookiecuttercookiecutter
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cookiecutter"
 * console.log(pkg.description) // "A cross-platform command-line utility that crea..."
 * console.log(pkg.programs)    // ["cookiecutter"]
 * console.log(pkg.versions[0]) // "2.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cookiecutter/cookiecutter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cookiecutterPackage = {
  /**
   * The display name of this package.
   */
  name: 'cookiecutter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cookiecutter/cookiecutter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A cross-platform command-line utility that creates projects from cookiecutters (project templates), e.g. Python package projects, C projects.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cookiecutter/cookiecutter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install cookiecutter' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cookiecutter',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.12',
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CookiecutterPackage = typeof cookiecutterPackage
