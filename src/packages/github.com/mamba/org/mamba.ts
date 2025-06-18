/**
 * **github.com/mamba-org/mamba** - pkgx package
 *
 * @domain `github.com/mamba/org/mamba`
 *
 * @install `pkgx github.com/mamba-org/mamba`
 * @aliases `github.com/mamba-org/mamba`, `mamba-org/mamba`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommambaorgmamba
 * // Or access via domain
 * const samePkg = pantry.githubcommambaorgmamba
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mamba-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mamba/org/mamba.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommambaorgmambaPackage = {
  /**
   * The display name of this package.
   */
  name: 'mamba-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mamba/org/mamba' as const,
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
  installCommand: 'pkgx github.com/mamba-org/mamba' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mamba-org/mamba',
    'mamba-org/mamba',
  ] as const,
  fullPath: 'github.com/mamba-org/mamba' as const,
}

export type GithubcommambaorgmambaPackage = typeof githubcommambaorgmambaPackage
