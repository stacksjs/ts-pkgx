/**
 * **khanacademy.org** - Go home.
 *
 * @domain `khanacademy.org`
 *
 * @install `pkgx khanacademy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khanacademyorg
 * console.log(pkg.name)        // "khanacademy.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khanacademy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khanacademyorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/khanacademy.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khanacademy.org' as const,
  fullPath: 'khanacademy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx khanacademy.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KhanacademyorgPackage = typeof khanacademyorgPackage
