/**
 * **coqui-ai** - pkgx package
 *
 * @domain `github.com/coqui-ai`
 *
 * @install `pkgx github.com/coqui-ai`
 * @name `coqui-ai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.coquiai
 * // Or access via domain
 * const samePkg = pantry.githubcomcoquiai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "coqui-ai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/coqui-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const coquiaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'coqui-ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/coqui-ai' as const,
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
  installCommand: 'pkgx github.com/coqui-ai' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/coqui-ai' as const,
}

export type CoquiaiPackage = typeof coquiaiPackage
