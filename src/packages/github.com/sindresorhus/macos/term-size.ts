/**
 * **github.com/sindresorhus/macos-term-size** - pkgx package
 *
 * @domain `github.com/sindresorhus/macos/term-size`
 *
 * @install `pkgx github.com/sindresorhus/macos-term-size`
 * @aliases `github.com/sindresorhus/macos-term-size`, `sindresorhus/macos-term-size`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsindresorhusmacostermsize
 * // Or access via domain
 * const samePkg = pantry.githubcomsindresorhusmacostermsize
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sindresorhus"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sindresorhus/macos/term-size.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsindresorhusmacostermsizePackage = {
  /**
   * The display name of this package.
   */
  name: 'sindresorhus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sindresorhus/macos/term-size' as const,
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
  installCommand: 'pkgx github.com/sindresorhus/macos-term-size' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/sindresorhus/macos-term-size',
    'sindresorhus/macos-term-size',
  ] as const,
  fullPath: 'github.com/sindresorhus/macos-term-size' as const,
}

export type GithubcomsindresorhusmacostermsizePackage = typeof githubcomsindresorhusmacostermsizePackage
