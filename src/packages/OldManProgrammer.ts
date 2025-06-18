/**
 * **OldManProgrammer** - pkgx package
 *
 * @domain `gitlab.com/OldManProgrammer`
 *
 * @install `pkgx gitlab.com/OldManProgrammer`
 * @name `OldManProgrammer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.OldManProgrammer
 * // Or access via domain
 * const samePkg = pantry.gitlabcomoldmanprogrammer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "OldManProgrammer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/OldManProgrammer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oldManProgrammerPackage = {
  /**
   * The display name of this package.
   */
  name: 'OldManProgrammer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/OldManProgrammer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gitlab.com/OldManProgrammer' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gitlab.com/OldManProgrammer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gitlab.com/OldManProgrammer' as const,
}

export type OldManProgrammerPackage = typeof oldManProgrammerPackage
