/**
 * **robot** - Crafters of fine Open Source products
 *
 * @domain `robotframework.org`
 *
 * @install `pkgx robotframework.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.robotframeworkorg
 * console.log(pkg.name)        // "robot"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/robotframework-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const robotframeworkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'robot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/robotframework.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'robotframework.org' as const,
  fullPath: 'robotframework.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx robotframework.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RobotframeworkorgPackage = typeof robotframeworkorgPackage
