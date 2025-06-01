/**
 * **pipenv** - Crafters of fine Open Source products
 *
 * @domain `pipenv.pypa.io`
 *
 * @install `pkgx pipenv.pypa.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pipenvpypaio
 * console.log(pkg.name)        // "pipenv"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pipenv-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pipenvpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pipenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pipenv.pypa.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pipenv.pypa.io' as const,
  fullPath: 'pipenv.pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pipenv.pypa.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PipenvpypaioPackage = typeof pipenvpypaioPackage
