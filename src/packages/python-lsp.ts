/**
 * **python-lsp** - pkgx package
 *
 * @domain `github.com/python-lsp`
 *
 * @install `pkgx github.com/python-lsp`
 * @name `python-lsp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pythonlsp
 * // Or access via domain
 * const samePkg = pantry.githubcompythonlsp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-lsp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/python-lsp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonlspPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-lsp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/python-lsp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/python-lsp' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/python-lsp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/python-lsp' as const,
}

export type PythonlspPackage = typeof pythonlspPackage
