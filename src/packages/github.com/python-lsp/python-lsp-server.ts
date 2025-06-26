/**
 * **python-lsp-server** - Package from pantry: github.com/python-lsp/python-lsp-server
 *
 * @domain `github.com/python-lsp/python-lsp-server`
 *
 * @install `launchpad install github.com/python-lsp/python-lsp-server`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompythonlsppythonlspserver
 * console.log(pkg.name)        // "python-lsp-server"
 * console.log(pkg.description) // "Package from pantry: github.com/python-lsp/pyth..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/python-lsp/python-lsp-server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompythonlsppythonlspserverPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-lsp-server' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/python-lsp/python-lsp-server' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/python-lsp/python-lsp-server' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/python-lsp/python-lsp-server' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/python-lsp/python-lsp-server -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/python-lsp/python-lsp-server' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/python-lsp/python-lsp-server/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompythonlsppythonlspserverPackage = typeof githubcompythonlsppythonlspserverPackage
