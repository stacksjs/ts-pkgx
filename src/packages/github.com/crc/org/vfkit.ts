/**
 * **github.com/crc-org/vfkit** - pkgx package
 *
 * @domain `github.com/crc/org/vfkit`
 *
 * @install `pkgx github.com/crc-org/vfkit`
 * @aliases `github.com/crc-org/vfkit`, `crc-org/vfkit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcrcorgvfkit
 * // Or access via domain
 * const samePkg = pantry.githubcomcrcorgvfkit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "crc-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/crc/org/vfkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcrcorgvfkitPackage = {
  /**
   * The display name of this package.
   */
  name: 'crc-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/crc/org/vfkit' as const,
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
  installCommand: 'pkgx github.com/crc-org/vfkit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/crc-org/vfkit',
    'crc-org/vfkit',
  ] as const,
  fullPath: 'github.com/crc-org/vfkit' as const,
}

export type GithubcomcrcorgvfkitPackage = typeof githubcomcrcorgvfkitPackage
