/**
 * **ankitpokhrel** - pkgx package
 *
 * @domain `github.com/ankitpokhrel`
 *
 * @install `pkgx github.com/ankitpokhrel`
 * @name `ankitpokhrel`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ankitpokhrel
 * // Or access via domain
 * const samePkg = pantry.githubcomankitpokhrel
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ankitpokhrel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ankitpokhrel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ankitpokhrelPackage = {
  /**
   * The display name of this package.
   */
  name: 'ankitpokhrel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ankitpokhrel' as const,
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
  installCommand: 'pkgx github.com/ankitpokhrel' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ankitpokhrel' as const,
}

export type AnkitpokhrelPackage = typeof ankitpokhrelPackage
