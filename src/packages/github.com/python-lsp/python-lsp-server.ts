/**
 * **pylsp** - Fork of the python-language-server project, maintained by the Spyder IDE team and the community
 *
 * @domain `github.com/python-lsp/python-lsp-server`
 * @programs `pylsp`
 * @version `1.12.2` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pylsp`
 * @name `pylsp`
 * @aliases `python-lsp/python-lsp-server`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pylsp
 * // Or access via domain
 * const samePkg = pantry.githubcompythonlsppythonlspserver
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pylsp"
 * console.log(pkg.description) // "Fork of the python-language-server project, mai..."
 * console.log(pkg.programs)    // ["pylsp"]
 * console.log(pkg.versions[0]) // "1.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/python-lsp/python-lsp-server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pylspPackage = {
  /**
   * The display name of this package.
   */
  name: 'pylsp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/python-lsp/python-lsp-server' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fork of the python-language-server project, maintained by the Spyder IDE team and the community' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/python-lsp/python-lsp-server/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pylsp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pylsp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.0',
    '1.10.1',
    '1.10.0',
    '1.9.0',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.4',
    '1.7.3',
    '1.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'python-lsp/python-lsp-server',
  ] as const,
  fullPath: 'github.com/python-lsp/python-lsp-server' as const,
}

export type PylspPackage = typeof pylspPackage
