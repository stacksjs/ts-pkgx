/**
 * **golangci-lint** - Crafters of fine Open Source products
 *
 * @domain `golangci-lint.run`
 *
 * @install `pkgx golangci-lint.run`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.golangcilintrun
 * console.log(pkg.name)        // "golangci-lint"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/golangci-lint-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const golangcilintrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'golangci-lint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/golangci-lint.run/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'golangci-lint.run' as const,
  fullPath: 'golangci-lint.run' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx golangci-lint.run' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GolangcilintrunPackage = typeof golangcilintrunPackage
