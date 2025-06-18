/**
 * **github.com/squidfunk/mkdocs-material** - pkgx package
 *
 * @domain `github.com/squidfunk/mkdocs/material`
 *
 * @install `pkgx github.com/squidfunk/mkdocs-material`
 * @aliases `github.com/squidfunk/mkdocs-material`, `squidfunk/mkdocs-material`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsquidfunkmkdocsmaterial
 * // Or access via domain
 * const samePkg = pantry.githubcomsquidfunkmkdocsmaterial
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "squidfunk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/squidfunk/mkdocs/material.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsquidfunkmkdocsmaterialPackage = {
  /**
   * The display name of this package.
   */
  name: 'squidfunk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/squidfunk/mkdocs/material' as const,
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
  installCommand: 'pkgx github.com/squidfunk/mkdocs-material' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/squidfunk/mkdocs-material',
    'squidfunk/mkdocs-material',
  ] as const,
  fullPath: 'github.com/squidfunk/mkdocs-material' as const,
}

export type GithubcomsquidfunkmkdocsmaterialPackage = typeof githubcomsquidfunkmkdocsmaterialPackage
