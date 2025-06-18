/**
 * **mitchellh** - pkgx package
 *
 * @domain `github.com/mitchellh`
 *
 * @install `pkgx github.com/mitchellh`
 * @name `mitchellh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mitchellh
 * // Or access via domain
 * const samePkg = pantry.githubcommitchellh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mitchellh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mitchellh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mitchellhPackage = {
  /**
   * The display name of this package.
   */
  name: 'mitchellh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mitchellh' as const,
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
  installCommand: 'pkgx github.com/mitchellh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mitchellh' as const,
}

export type MitchellhPackage = typeof mitchellhPackage
