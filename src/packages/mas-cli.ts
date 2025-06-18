/**
 * **mas-cli** - pkgx package
 *
 * @domain `github.com/mas-cli`
 *
 * @install `pkgx github.com/mas-cli`
 * @name `mas-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mascli
 * // Or access via domain
 * const samePkg = pantry.githubcommascli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mas-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mas-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mascliPackage = {
  /**
   * The display name of this package.
   */
  name: 'mas-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mas-cli' as const,
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
  installCommand: 'pkgx github.com/mas-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mas-cli' as const,
}

export type MascliPackage = typeof mascliPackage
