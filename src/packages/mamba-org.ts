/**
 * **mamba-org** - pkgx package
 *
 * @domain `github.com/mamba-org`
 *
 * @install `pkgx github.com/mamba-org`
 * @name `mamba-org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mambaorg
 * // Or access via domain
 * const samePkg = pantry.githubcommambaorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mamba-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mamba-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mambaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mamba-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mamba-org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/mamba-org' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/mamba-org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mamba-org' as const,
}

export type MambaorgPackage = typeof mambaorgPackage
