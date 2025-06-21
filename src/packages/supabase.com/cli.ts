/**
 * **cli** - Package from pantry: supabase.com/cli
 *
 * @domain `supabase.com/cli`
 *
 * @install `launchpad install supabase.com/cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.supabasecomcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: supabase.com/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/supabase-com/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const supabasecomcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'supabase.com/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: supabase.com/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install supabase.com/cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/supabase.com/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SupabasecomcliPackage = typeof supabasecomcliPackage
