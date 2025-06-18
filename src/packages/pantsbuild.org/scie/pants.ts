/**
 * **pantsbuild.org/scie-pants** - pkgx package
 *
 * @domain `pantsbuild.org/scie/pants`
 *
 * @install `pkgx pantsbuild.org/scie-pants`
 * @name `scie-pants`
 * @aliases `pantsbuild.org/scie-pants`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pantsbuildorgsciepants
 * // Or access via domain
 * const samePkg = pantry.pantsbuildorgsciepants
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "scie-pants"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pantsbuild-org/scie/pants.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pantsbuildorgsciepantsPackage = {
  /**
   * The display name of this package.
   */
  name: 'scie-pants' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pantsbuild.org/scie/pants' as const,
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
  installCommand: 'pkgx pantsbuild.org/scie-pants' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pantsbuild.org/scie-pants',
  ] as const,
  fullPath: 'pantsbuild.org/scie-pants' as const,
}

export type PantsbuildorgsciepantsPackage = typeof pantsbuildorgsciepantsPackage
