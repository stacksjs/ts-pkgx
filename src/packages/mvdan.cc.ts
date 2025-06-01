/**
 * **mvdan.cc** - Go home.
 *
 * @domain `mvdan.cc`
 *
 * @install `pkgx mvdan.cc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mvdancc
 * console.log(pkg.name)        // "mvdan.cc"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mvdan-cc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mvdanccPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/mvdan.cc/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mvdan.cc' as const,
  fullPath: 'mvdan.cc' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mvdan.cc' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MvdanccPackage = typeof mvdanccPackage
