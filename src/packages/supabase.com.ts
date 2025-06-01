/**
 * **supabase.com** - Go home.
 *
 * @domain `supabase.com`
 *
 * @install `pkgx supabase.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.supabasecom
 * console.log(pkg.name)        // "supabase.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/supabase-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const supabasecomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/supabase.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'supabase.com' as const,
  fullPath: 'supabase.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx supabase.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SupabasecomPackage = typeof supabasecomPackage
