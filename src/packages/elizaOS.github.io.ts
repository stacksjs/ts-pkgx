/**
 * **elizaOS** - Crafters of fine Open Source products
 *
 * @domain `elizaOS.github.io`
 *
 * @install `pkgx elizaOS.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elizaosgithubio
 * console.log(pkg.name)        // "elizaOS"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elizaOS-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elizaosgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'elizaOS' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/elizaOS.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elizaOS.github.io' as const,
  fullPath: 'elizaOS.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx elizaOS.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ElizaosgithubioPackage = typeof elizaosgithubioPackage
