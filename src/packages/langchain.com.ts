/**
 * **langchain.com** - Crafters of fine Open Source products
 *
 * @domain `langchain.com`
 *
 * @install `pkgx langchain.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.langchaincom
 * console.log(pkg.name)        // "langchain.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/langchain-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const langchaincomPackage = {
  /**
   * The display name of this package.
   */
  name: 'langchain.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/langchain.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'langchain.com' as const,
  fullPath: 'langchain.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx langchain.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LangchaincomPackage = typeof langchaincomPackage
