/**
 * **micro** - Crafters of fine Open Source products
 *
 * @domain `micro-editor.github.io`
 *
 * @install `pkgx micro-editor.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microeditorgithubio
 * console.log(pkg.name)        // "micro"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/micro-editor-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microeditorgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'micro' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/micro-editor.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'micro-editor.github.io' as const,
  fullPath: 'micro-editor.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx micro-editor.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MicroeditorgithubioPackage = typeof microeditorgithubioPackage
