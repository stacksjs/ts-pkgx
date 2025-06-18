/**
 * **jinja2** - CLI for the Jinja2 templating language
 *
 * @domain `github.com/mattrobenolt/jinja2-cli`
 * @programs `jinja2`
 * @version `0.8.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jinja2`
 * @aliases `jinja2`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jinja2
 * // Or access via domain
 * const samePkg = pantry.githubcommattrobenoltjinja2cli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jinja2-cli"
 * console.log(pkg.description) // "CLI for the Jinja2 templating language"
 * console.log(pkg.programs)    // ["jinja2"]
 * console.log(pkg.versions[0]) // "0.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mattrobenolt/jinja2-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jinja2Package = {
  /**
   * The display name of this package.
   */
  name: 'jinja2-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mattrobenolt/jinja2-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for the Jinja2 templating language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mattrobenolt/jinja2-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jinja2' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jinja2',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jinja2',
  ] as const,
}

export type Jinja2Package = typeof jinja2Package
