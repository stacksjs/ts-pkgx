/**
 * **code.videolan.org** - Go home.
 *
 * @domain `code.videolan.org`
 *
 * @install `pkgx code.videolan.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.codevideolanorg
 * console.log(pkg.name)        // "code.videolan.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codevideolanorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/code.videolan.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org' as const,
  fullPath: 'code.videolan.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx code.videolan.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CodevideolanorgPackage = typeof codevideolanorgPackage
