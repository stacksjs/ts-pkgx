/**
 * **modernc.org-goyacc** - Go home.
 *
 * @domain `modernc.org-goyacc`
 *
 * @install `pkgx modernc.org-goyacc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.moderncorggoyacc
 * console.log(pkg.name)        // "modernc.org-goyacc"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/modernc-org-goyacc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moderncorggoyaccPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/modernc.org-goyacc/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'modernc.org-goyacc' as const,
  fullPath: 'modernc.org-goyacc' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx modernc.org-goyacc' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ModerncorggoyaccPackage = typeof moderncorggoyaccPackage
