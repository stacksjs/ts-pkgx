/**
 * **openai.com** - Go home.
 *
 * @domain `openai.com`
 *
 * @install `pkgx openai.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openaicom
 * console.log(pkg.name)        // "openai.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openaicomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/openai.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openai.com' as const,
  fullPath: 'openai.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openai.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenaicomPackage = typeof openaicomPackage
