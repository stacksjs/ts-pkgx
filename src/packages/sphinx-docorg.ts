/**
 * **sphinx** - Tool to create intelligent and beautiful documentation
 *
 * @domain `sphinx-doc.org`
 * @programs `sphinx-apidoc`, `sphinx-autogen`, `sphinx-build`, `sphinx-quickstart`
 * @version `8.2.3` (42 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +sphinx-doc.org -- $SHELL -i`
 * @aliases `sphinx`
 * @dependencies `python.org>=3.8<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sphinx
 * // Or access via domain
 * const samePkg = pantry.sphinxdocorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sphinx-doc.org"
 * console.log(pkg.description) // "Tool to create intelligent and beautiful docume..."
 * console.log(pkg.programs)    // ["sphinx-apidoc", "sphinx-autogen", ...]
 * console.log(pkg.versions[0]) // "8.2.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sphinx-doc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sphinxPackage = {
  /**
   * The display name of this package.
   */
  name: 'sphinx-doc.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sphinx-doc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool to create intelligent and beautiful documentation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sphinx-doc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +sphinx-doc.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sphinx-apidoc',
    'sphinx-autogen',
    'sphinx-build',
    'sphinx-quickstart',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.8<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.2.3',
    '8.2.2',
    '8.2.1',
    '8.2.0',
    '8.1.3',
    '8.1.2',
    '8.1.1',
    '8.1.0',
    '8.0.2',
    '8.0.1',
    '8.0.0',
    '7.4.7',
    '7.4.6',
    '7.4.5',
    '7.4.4',
    '7.4.3',
    '7.4.2',
    '7.4.1',
    '7.4.0',
    '7.3.7',
    '7.3.6',
    '7.3.5',
    '7.3.4',
    '7.3.3',
    '7.3.2',
    '7.3.1',
    '7.3.0',
    '7.2.6',
    '7.2.5',
    '7.2.4',
    '7.2.3',
    '7.2.2',
    '7.2.1',
    '7.2.0',
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '7.0.1',
    '7.0.0',
    '6.2.1',
    '6.2.0',
    '6.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sphinx',
  ] as const,
}

export type SphinxPackage = typeof sphinxPackage
