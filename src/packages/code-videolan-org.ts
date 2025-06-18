/**
 * **code.videolan.org** - pkgx package
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
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codevideolanorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'code.videolan.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx code.videolan.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'code.videolan.org' as const,
}

export type CodevideolanorgPackage = typeof codevideolanorgPackage
