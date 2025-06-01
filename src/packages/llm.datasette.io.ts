/**
 * **llm** - Crafters of fine Open Source products
 *
 * @domain `llm.datasette.io`
 *
 * @install `pkgx llm.datasette.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.llmdatasetteio
 * console.log(pkg.name)        // "llm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/llm-datasette-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const llmdatasetteioPackage = {
  /**
   * The display name of this package.
   */
  name: 'llm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/llm.datasette.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'llm.datasette.io' as const,
  fullPath: 'llm.datasette.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx llm.datasette.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LlmdatasetteioPackage = typeof llmdatasetteioPackage
