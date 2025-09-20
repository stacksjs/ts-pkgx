/**
 * **docutils.org** - Text processing system for reStructuredText
 *
 * @domain `docutils.org`
 * @programs `docutils`, `rst2html`, `rst2html4`, `rst2html5`, `rst2latex`, ... (+6 more)
 * @version `0.22.2` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install docutils.org`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.docutilsorg
 * console.log(pkg.name)        // "docutils.org"
 * console.log(pkg.description) // "Text processing system for reStructuredText"
 * console.log(pkg.programs)    // ["docutils", "rst2html", ...]
 * console.log(pkg.versions[0]) // "0.22.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docutils-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const docutilsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'docutils.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docutils.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Text processing system for reStructuredText' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docutils.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docutils.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docutils',
    'rst2html',
    'rst2html4',
    'rst2html5',
    'rst2latex',
    'rst2man',
    'rst2odt',
    'rst2pseudoxml',
    'rst2s5',
    'rst2xetex',
    'rst2xml',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.22.2',
    '0.22.1',
    '0.22.0',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.1',
    '0.20.0',
    '0.19.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docutils.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docutils.org' as const,
}

export type DocutilsorgPackage = typeof docutilsorgPackage
