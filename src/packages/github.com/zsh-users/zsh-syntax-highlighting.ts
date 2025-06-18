/**
 * **zsh-users/zsh-syntax-highlighting** - Fish shell like syntax highlighting for Zsh.
 *
 * @domain `github.com/zsh-users/zsh-syntax-highlighting`
 * @version `0.8.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/zsh-users/zsh-syntax-highlighting -- $SHELL -i`
 * @aliases `zsh-users/zsh-syntax-highlighting`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.zshuserszshsyntaxhighlighting
 * // Or access via domain
 * const samePkg = pantry.githubcomzshuserszshsyntaxhighlighting
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/zsh-users/zsh-syntax-highlighting"
 * console.log(pkg.description) // "Fish shell like syntax highlighting for Zsh."
 * console.log(pkg.versions[0]) // "0.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zsh-users/zsh-syntax-highlighting.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zshuserszshsyntaxhighlightingPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/zsh-users/zsh-syntax-highlighting' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zsh-users/zsh-syntax-highlighting' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fish shell like syntax highlighting for Zsh.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zsh-users/zsh-syntax-highlighting/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/zsh-users/zsh-syntax-highlighting -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.0',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'zsh-users/zsh-syntax-highlighting',
  ] as const,
  fullPath: 'github.com/zsh-users/zsh-syntax-highlighting' as const,
}

export type ZshuserszshsyntaxhighlightingPackage = typeof zshuserszshsyntaxhighlightingPackage
