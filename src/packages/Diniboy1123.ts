/**
 * **Diniboy1123** - pkgx package
 *
 * @domain `github.com/Diniboy1123`
 *
 * @install `pkgx github.com/Diniboy1123`
 * @name `Diniboy1123`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Diniboy1123
 * // Or access via domain
 * const samePkg = pantry.githubcomdiniboy1123
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Diniboy1123"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Diniboy1123.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const diniboy1123Package = {
  /**
   * The display name of this package.
   */
  name: 'Diniboy1123' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Diniboy1123' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Diniboy1123' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Diniboy1123' as const,
}

export type Diniboy1123Package = typeof diniboy1123Package
