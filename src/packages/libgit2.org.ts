/**
 * **git2** - Crafters of fine Open Source products
 *
 * @domain `libgit2.org`
 *
 * @install `pkgx libgit2.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libgit2org
 * console.log(pkg.name)        // "git2"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgit2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libgit2orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'git2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libgit2.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgit2.org' as const,
  fullPath: 'libgit2.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libgit2.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Libgit2orgPackage = typeof libgit2orgPackage
