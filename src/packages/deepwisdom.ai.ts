/**
 * **MetaGPT** - Crafters of fine Open Source products
 *
 * @domain `deepwisdom.ai`
 *
 * @install `pkgx deepwisdom.ai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.deepwisdomai
 * console.log(pkg.name)        // "MetaGPT"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/deepwisdom-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const deepwisdomaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'MetaGPT' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/deepwisdom.ai/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'deepwisdom.ai' as const,
  fullPath: 'deepwisdom.ai' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx deepwisdom.ai' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DeepwisdomaiPackage = typeof deepwisdomaiPackage
