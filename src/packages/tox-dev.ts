/**
 * **tox-dev** - pkgx package
 *
 * @domain `github.com/tox-dev`
 *
 * @install `pkgx github.com/tox-dev`
 * @name `tox-dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.toxdev
 * // Or access via domain
 * const samePkg = pantry.githubcomtoxdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tox-dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tox-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const toxdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'tox-dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tox-dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/tox-dev' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/tox-dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/tox-dev' as const,
}

export type ToxdevPackage = typeof toxdevPackage
