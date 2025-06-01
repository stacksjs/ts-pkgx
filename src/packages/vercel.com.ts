/**
 * **vercel.com** - Go home.
 *
 * @domain `vercel.com`
 *
 * @install `pkgx vercel.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vercelcom
 * console.log(pkg.name)        // "vercel.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vercel-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vercelcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/vercel.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vercel.com' as const,
  fullPath: 'vercel.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vercel.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VercelcomPackage = typeof vercelcomPackage
