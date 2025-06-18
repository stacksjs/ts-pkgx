/**
 * **fastfetch-cli** - pkgx package
 *
 * @domain `github.com/fastfetch-cli`
 *
 * @install `pkgx github.com/fastfetch-cli`
 * @name `fastfetch-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fastfetchcli
 * // Or access via domain
 * const samePkg = pantry.githubcomfastfetchcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fastfetch-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fastfetch-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastfetchcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastfetch-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fastfetch-cli' as const,
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
  installCommand: 'pkgx github.com/fastfetch-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/fastfetch-cli' as const,
}

export type FastfetchcliPackage = typeof fastfetchcliPackage
