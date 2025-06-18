/**
 * **github.com/mamba-org/micro** - pkgx package
 *
 * @domain `github.com/mamba/org/micro`
 *
 * @install `pkgx github.com/mamba-org/micro`
 * @aliases `github.com/mamba-org/micro`, `mamba-org/micro`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommambaorgmicro
 * // Or access via domain
 * const samePkg = pantry.githubcommambaorgmicro
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mamba-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mamba/org/micro.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommambaorgmicroPackage = {
  /**
   * The display name of this package.
   */
  name: 'mamba-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mamba/org/micro' as const,
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
  installCommand: 'pkgx github.com/mamba-org/micro' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mamba-org/micro',
    'mamba-org/micro',
  ] as const,
  fullPath: 'github.com/mamba-org/micro' as const,
}

export type GithubcommambaorgmicroPackage = typeof githubcommambaorgmicroPackage
