/**
 * **dagger** - Crafters of fine Open Source products
 *
 * @domain `dagger.io`
 *
 * @install `pkgx dagger.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.daggerio
 * console.log(pkg.name)        // "dagger"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dagger-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daggerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'dagger' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dagger.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dagger.io' as const,
  fullPath: 'dagger.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dagger.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DaggerioPackage = typeof daggerioPackage
