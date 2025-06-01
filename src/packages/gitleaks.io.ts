/**
 * **gitleaks** - Crafters of fine Open Source products
 *
 * @domain `gitleaks.io`
 *
 * @install `pkgx gitleaks.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitleaksio
 * console.log(pkg.name)        // "gitleaks"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitleaks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitleaksioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitleaks' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gitleaks.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitleaks.io' as const,
  fullPath: 'gitleaks.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gitleaks.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GitleaksioPackage = typeof gitleaksioPackage
