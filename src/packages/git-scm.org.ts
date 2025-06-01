/**
 * **git** - Crafters of fine Open Source products
 *
 * @domain `git-scm.org`
 *
 * @install `pkgx git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitscmorg
 * console.log(pkg.name)        // "git"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-scm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitscmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'git' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/git-scm.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-scm.org' as const,
  fullPath: 'git-scm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git-scm.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GitscmorgPackage = typeof gitscmorgPackage
