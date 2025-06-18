/**
 * **neovim/unibilium** - https://github.com/neovim/neovim/blob/master/MAINTAIN.md#third-party-dependencies
 *
 * @domain `github.com/neovim/unibilium`
 * @version `2.1.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/neovim/unibilium -- $SHELL -i`
 * @aliases `neovim/unibilium`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.neovimunibilium
 * // Or access via domain
 * const samePkg = pantry.githubcomneovimunibilium
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/neovim/unibilium"
 * console.log(pkg.description) // "https://github.com/neovim/neovim/blob/master/MA..."
 * console.log(pkg.versions[0]) // "2.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/neovim/unibilium.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const neovimunibiliumPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/neovim/unibilium' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/neovim/unibilium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'https://github.com/neovim/neovim/blob/master/MAINTAIN.md#third-party-dependencies' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/neovim/unibilium/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/neovim/unibilium -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.2',
    '2.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'neovim/unibilium',
  ] as const,
  fullPath: 'github.com/neovim/unibilium' as const,
}

export type NeovimunibiliumPackage = typeof neovimunibiliumPackage
