/**
 * **libplacebo** - pkgx package
 *
 * @domain `videolan.org/libplacebo`
 * @version `7.351.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +videolan.org/libplacebo -- $SHELL -i`
 * @aliases `libplacebo`
 * @dependencies `littlecms.com^2`, `github.com/KhronosGroup/Vulkan-Loader^1.3.272`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libplacebo
 * // Or access via domain
 * const samePkg = pantry.videolanorglibplacebo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "videolan.org/libplacebo"
 * console.log(pkg.versions[0]) // "7.351.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/libplacebo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libplaceboPackage = {
  /**
   * The display name of this package.
   */
  name: 'videolan.org/libplacebo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'videolan.org/libplacebo' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/videolan.org/libplacebo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +videolan.org/libplacebo -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'littlecms.com^2',
    'github.com/KhronosGroup/Vulkan-Loader^1.3.272',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.351.0',
    '7.349.0',
    '6.338.2',
    '6.338.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libplacebo',
  ] as const,
  fullPath: 'videolan.org/libplacebo' as const,
}

export type LibplaceboPackage = typeof libplaceboPackage
