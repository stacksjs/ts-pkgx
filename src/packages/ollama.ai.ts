/**
 * **ollama** - Crafters of fine Open Source products
 *
 * @domain `ollama.ai`
 *
 * @install `pkgx ollama.ai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ollamaai
 * console.log(pkg.name)        // "ollama"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ollama-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ollamaaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'ollama' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ollama.ai/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ollama.ai' as const,
  fullPath: 'ollama.ai' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ollama.ai' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OllamaaiPackage = typeof ollamaaiPackage
