/**
 * **github.com/python-lsp/python-lsp-server** - pkgx package
 *
 * @domain `github.com/python/lsp/python-lsp-server`
 *
 * @install `pkgx github.com/python-lsp/python-lsp-server`
 * @aliases `github.com/python-lsp/python-lsp-server`, `python-lsp/python-lsp-server`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcompythonlsppythonlspserver
 * // Or access via domain
 * const samePkg = pantry.githubcompythonlsppythonlspserver
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-lsp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/python/lsp/python-lsp-server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompythonlsppythonlspserverPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-lsp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/python/lsp/python-lsp-server' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/python-lsp/python-lsp-server' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/python-lsp/python-lsp-server',
    'python-lsp/python-lsp-server',
  ] as const,
  fullPath: 'github.com/python-lsp/python-lsp-server' as const,
}

export type GithubcompythonlsppythonlspserverPackage = typeof githubcompythonlsppythonlspserverPackage
