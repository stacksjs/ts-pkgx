/**
 * **jfrog.com** - Go home.
 *
 * @domain `jfrog.com`
 *
 * @install `pkgx jfrog.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jfrogcom
 * console.log(pkg.name)        // "jfrog.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jfrog-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jfrogcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/jfrog.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jfrog.com' as const,
  fullPath: 'jfrog.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jfrog.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JfrogcomPackage = typeof jfrogcomPackage
