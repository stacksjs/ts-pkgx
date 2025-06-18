/**
 * **github.com/ArionThinker/tea-package-builder** - pkgx package
 *
 * @domain `github.com/ArionThinker/tea/package-builder`
 *
 * @install `pkgx github.com/ArionThinker/tea-package-builder`
 * @aliases `github.com/ArionThinker/tea-package-builder`, `ArionThinker/tea-package-builder`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomArionThinkerteapackagebuilder
 * // Or access via domain
 * const samePkg = pantry.githubcomarionthinkerteapackagebuilder
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ArionThinker"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ArionThinker/tea/package-builder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomArionThinkerteapackagebuilderPackage = {
  /**
   * The display name of this package.
   */
  name: 'ArionThinker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ArionThinker/tea/package-builder' as const,
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
  installCommand: 'pkgx github.com/ArionThinker/tea-package-builder' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/ArionThinker/tea-package-builder',
    'ArionThinker/tea-package-builder',
  ] as const,
  fullPath: 'github.com/ArionThinker/tea-package-builder' as const,
}

export type GithubcomArionThinkerteapackagebuilderPackage = typeof githubcomArionThinkerteapackagebuilderPackage
