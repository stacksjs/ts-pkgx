/**
 * **interpreter** - A natural language interface for computers
 *
 * @domain `openinterpreter.com`
 * @programs `interpreter`
 * @version `0.4.0` (22 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install interpreter`
 * @name `open-interpreter`
 * @aliases `interpreter`
 * @dependencies `python.org>=3.10<3.12`, `github.com/mattrobenolt/jinja2-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.interpreter
 * // Or access via domain
 * const samePkg = pantry.openinterpretercom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "open-interpreter"
 * console.log(pkg.description) // "A natural language interface for computers"
 * console.log(pkg.programs)    // ["interpreter"]
 * console.log(pkg.versions[0]) // "0.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openinterpreter-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const interpreterPackage = {
  /**
   * The display name of this package.
   */
  name: 'open-interpreter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openinterpreter.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A natural language interface for computers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openinterpreter.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install interpreter' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'interpreter',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.10<3.12',
    'github.com/mattrobenolt/jinja2-cli',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.0',
    '0.2.1',
    '0.2.0',
    '0.1.18',
    '0.1.17',
    '0.1.16',
    '0.1.15',
    '0.1.14',
    '0.1.13',
    '0.1.12',
    '0.1.11',
    '0.1.9',
    '0.1.8',
    '0.1.7',
    '0.1.6',
    '0.1.5',
    '0.1.4',
    '0.1.3',
    '0.1.2',
    '0.1.1',
    '0.1.0',
    '0.0.297',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'interpreter',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) interpreter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install interpreter' as const,
}

export type InterpreterPackage = typeof interpreterPackage
