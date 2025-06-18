/**
 * **pixlet** - Build apps for pixel-based displays ✨
 *
 * @domain `tidbyt.com`
 * @programs `pixlet`
 * @version `0.34.0` (20 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/tidbyt-com.md
 *
 * @install `sh <(curl https://pkgx.sh) pixlet`
 * @name `pixlet`
 * @dependencies `google.com/webp^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pixlet
 * // Or access via domain
 * const samePkg = pantry.tidbytcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pixlet"
 * console.log(pkg.description) // "Build apps for pixel-based displays ✨"
 * console.log(pkg.programs)    // ["pixlet"]
 * console.log(pkg.versions[0]) // "0.34.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tidbyt-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pixletPackage = {
  /**
   * The display name of this package.
   */
  name: 'pixlet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tidbyt.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Build apps for pixel-based displays ✨' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tidbyt.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pixlet' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pixlet',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'google.com/webp^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.34.0',
    '0.33.5',
    '0.33.4',
    '0.33.3',
    '0.33.2',
    '0.33.1',
    '0.33.0',
    '0.32.7',
    '0.32.6',
    '0.32.5',
    '0.32.4',
    '0.32.3',
    '0.32.2',
    '0.32.1',
    '0.32.0',
    '0.31.0',
    '0.30.2',
    '0.30.1',
    '0.30.0',
    '0.29.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'tidbyt.com' as const,
}

export type PixletPackage = typeof pixletPackage
