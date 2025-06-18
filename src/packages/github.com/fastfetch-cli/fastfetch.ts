/**
 * **fastfetch-cli/fastfetch** - A maintained, feature-rich and performance oriented, neofetch like system information tool.
 *
 * @domain `github.com/fastfetch-cli/fastfetch`
 * @programs `fastfetch`, `flashfetch`
 * @version `2.45.0` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/fastfetch-cli/fastfetch -- $SHELL -i`
 * @aliases `fastfetch-cli/fastfetch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fastfetchclifastfetch
 * // Or access via domain
 * const samePkg = pantry.githubcomfastfetchclifastfetch
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/fastfetch-cli/fastfetch"
 * console.log(pkg.description) // "A maintained, feature-rich and performance orie..."
 * console.log(pkg.programs)    // ["fastfetch", "flashfetch"]
 * console.log(pkg.versions[0]) // "2.45.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fastfetch-cli/fastfetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastfetchclifastfetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/fastfetch-cli/fastfetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fastfetch-cli/fastfetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A maintained, feature-rich and performance oriented, neofetch like system information tool.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/fastfetch-cli/fastfetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/fastfetch-cli/fastfetch -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fastfetch',
    'flashfetch',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.45.0',
    '2.44.0',
    '2.43.0',
    '2.42.0',
    '2.41.0',
    '2.40.4',
    '2.40.3',
    '2.40.2',
    '2.40.1',
    '2.40.0',
    '2.39.1',
    '2.39.0',
    '2.38.0',
    '2.37.0',
    '2.36.1',
    '2.36.0',
    '2.35.0',
    '2.34.1',
    '2.34.0',
    '2.33.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fastfetch-cli/fastfetch',
  ] as const,
  fullPath: 'github.com/fastfetch-cli/fastfetch' as const,
}

export type FastfetchclifastfetchPackage = typeof fastfetchclifastfetchPackage
