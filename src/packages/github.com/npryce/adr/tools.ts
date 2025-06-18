/**
 * **github.com/npryce/adr-tools** - pkgx package
 *
 * @domain `github.com/npryce/adr/tools`
 *
 * @install `pkgx github.com/npryce/adr-tools`
 * @aliases `github.com/npryce/adr-tools`, `npryce/adr-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomnpryceadrtools
 * // Or access via domain
 * const samePkg = pantry.githubcomnpryceadrtools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "npryce"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/npryce/adr/tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnpryceadrtoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'npryce' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/npryce/adr/tools' as const,
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
  installCommand: 'pkgx github.com/npryce/adr-tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/npryce/adr-tools',
    'npryce/adr-tools',
  ] as const,
  fullPath: 'github.com/npryce/adr-tools' as const,
}

export type GithubcomnpryceadrtoolsPackage = typeof githubcomnpryceadrtoolsPackage
