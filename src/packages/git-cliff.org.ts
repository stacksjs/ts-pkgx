/**
 * **git-cliff** - Crafters of fine Open Source products
 *
 * @domain `git-cliff.org`
 *
 * @install `pkgx git-cliff.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitclifforg
 * console.log(pkg.name)        // "git-cliff"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-cliff-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitclifforgPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-cliff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/git-cliff.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-cliff.org' as const,
  fullPath: 'git-cliff.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git-cliff.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GitclifforgPackage = typeof gitclifforgPackage
