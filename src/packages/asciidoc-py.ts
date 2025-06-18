/**
 * **asciidoc-py** - pkgx package
 *
 * @domain `github.com/asciidoc-py`
 *
 * @install `pkgx github.com/asciidoc-py`
 * @name `asciidoc-py`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.asciidocpy
 * // Or access via domain
 * const samePkg = pantry.githubcomasciidocpy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "asciidoc-py"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/asciidoc-py.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciidocpyPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciidoc-py' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/asciidoc-py' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/asciidoc-py' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/asciidoc-py' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/asciidoc-py' as const,
}

export type AsciidocpyPackage = typeof asciidocpyPackage
