/**
 * **saerasoft.com** - Go home.
 *
 * @domain `saerasoft.com`
 *
 * @install `pkgx saerasoft.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.saerasoftcom
 * console.log(pkg.name)        // "saerasoft.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/saerasoft-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const saerasoftcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/saerasoft.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'saerasoft.com' as const,
  fullPath: 'saerasoft.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx saerasoft.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SaerasoftcomPackage = typeof saerasoftcomPackage
