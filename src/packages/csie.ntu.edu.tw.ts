/**
 * **csie.ntu.edu.tw** - Go home.
 *
 * @domain `csie.ntu.edu.tw`
 *
 * @install `pkgx csie.ntu.edu.tw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.csientuedutw
 * console.log(pkg.name)        // "csie.ntu.edu.tw"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/csie-ntu-edu-tw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const csientuedutwPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/csie.ntu.edu.tw/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'csie.ntu.edu.tw' as const,
  fullPath: 'csie.ntu.edu.tw' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx csie.ntu.edu.tw' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CsientuedutwPackage = typeof csientuedutwPackage
