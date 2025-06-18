/**
 * **muesli** - pkgx package
 *
 * @domain `github.com/muesli`
 *
 * @install `pkgx github.com/muesli`
 * @name `muesli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.muesli
 * // Or access via domain
 * const samePkg = pantry.githubcommuesli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "muesli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/muesli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const muesliPackage = {
  /**
   * The display name of this package.
   */
  name: 'muesli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/muesli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/muesli' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/muesli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/muesli' as const,
}

export type MuesliPackage = typeof muesliPackage
