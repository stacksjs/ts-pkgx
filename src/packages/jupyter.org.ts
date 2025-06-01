/**
 * **jupyter.org** - Crafters of fine Open Source products
 *
 * @domain `jupyter.org`
 *
 * @install `pkgx jupyter.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jupyterorg
 * console.log(pkg.name)        // "jupyter.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jupyter-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jupyterorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'jupyter.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jupyter.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jupyter.org' as const,
  fullPath: 'jupyter.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jupyter.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JupyterorgPackage = typeof jupyterorgPackage
