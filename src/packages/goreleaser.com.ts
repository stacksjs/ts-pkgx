/**
 * **goreleaser** - Crafters of fine Open Source products
 *
 * @domain `goreleaser.com`
 *
 * @install `pkgx goreleaser.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.goreleasercom
 * console.log(pkg.name)        // "goreleaser"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/goreleaser-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const goreleasercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'goreleaser' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/goreleaser.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'goreleaser.com' as const,
  fullPath: 'goreleaser.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx goreleaser.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GoreleasercomPackage = typeof goreleasercomPackage
