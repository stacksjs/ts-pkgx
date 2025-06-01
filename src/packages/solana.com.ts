/**
 * **solana** - Crafters of fine Open Source products
 *
 * @domain `solana.com`
 *
 * @install `pkgx solana.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.solanacom
 * console.log(pkg.name)        // "solana"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/solana-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const solanacomPackage = {
  /**
   * The display name of this package.
   */
  name: 'solana' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/solana.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'solana.com' as const,
  fullPath: 'solana.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx solana.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SolanacomPackage = typeof solanacomPackage
