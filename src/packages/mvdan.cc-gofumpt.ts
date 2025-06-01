/**
 * **mvdan.cc-gofumpt** - Go home.
 *
 * @domain `mvdan.cc-gofumpt`
 *
 * @install `pkgx mvdan.cc-gofumpt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mvdanccgofumpt
 * console.log(pkg.name)        // "mvdan.cc-gofumpt"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mvdan-cc-gofumpt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mvdanccgofumptPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/mvdan.cc-gofumpt/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mvdan.cc-gofumpt' as const,
  fullPath: 'mvdan.cc-gofumpt' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mvdan.cc-gofumpt' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MvdanccgofumptPackage = typeof mvdanccgofumptPackage
