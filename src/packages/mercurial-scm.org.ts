/**
 * **mercurial-scm.org** - Crafters of fine Open Source products
 *
 * @domain `mercurial-scm.org`
 *
 * @install `pkgx mercurial-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mercurialscmorg
 * console.log(pkg.name)        // "mercurial-scm.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mercurial-scm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mercurialscmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mercurial-scm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mercurial-scm.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mercurial-scm.org' as const,
  fullPath: 'mercurial-scm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mercurial-scm.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MercurialscmorgPackage = typeof mercurialscmorgPackage
