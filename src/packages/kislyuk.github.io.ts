/**
 * **kislyuk.github.io** - Go home.
 *
 * @domain `kislyuk.github.io`
 *
 * @install `pkgx kislyuk.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kislyukgithubio
 * console.log(pkg.name)        // "kislyuk.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kislyuk-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kislyukgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kislyuk.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kislyuk.github.io' as const,
  fullPath: 'kislyuk.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kislyuk.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KislyukgithubioPackage = typeof kislyukgithubioPackage
