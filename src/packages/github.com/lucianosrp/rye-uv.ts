/**
 * **rye-uv** - Simple CLI tool to migrate from Rye to Uv
 *
 * @domain `github.com/lucianosrp/rye-uv`
 * @programs `rye-uv`
 * @version `0.1.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rye-uv`
 * @name `rye-uv`
 * @companions `astral.sh/uv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ryeuv
 * // Or access via domain
 * const samePkg = pantry.githubcomlucianosrpryeuv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rye-uv"
 * console.log(pkg.description) // "Simple CLI tool to migrate from Rye to Uv"
 * console.log(pkg.programs)    // ["rye-uv"]
 * console.log(pkg.versions[0]) // "0.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lucianosrp/rye-uv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ryeuvPackage = {
  /**
   * The display name of this package.
   */
  name: 'rye-uv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lucianosrp/rye-uv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple CLI tool to migrate from Rye to Uv' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lucianosrp/rye-uv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rye-uv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rye-uv',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'astral.sh/uv',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RyeuvPackage = typeof ryeuvPackage
