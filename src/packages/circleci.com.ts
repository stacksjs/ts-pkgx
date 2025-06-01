/**
 * **circleci** - Crafters of fine Open Source products
 *
 * @domain `circleci.com`
 *
 * @install `pkgx circleci.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.circlecicom
 * console.log(pkg.name)        // "circleci"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/circleci-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const circlecicomPackage = {
  /**
   * The display name of this package.
   */
  name: 'circleci' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/circleci.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'circleci.com' as const,
  fullPath: 'circleci.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx circleci.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CirclecicomPackage = typeof circlecicomPackage
