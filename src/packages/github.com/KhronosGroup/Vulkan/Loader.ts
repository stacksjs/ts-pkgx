/**
 * **github.com/KhronosGroup/Vulkan-Loader** - pkgx package
 *
 * @domain `github.com/KhronosGroup/Vulkan/Loader`
 *
 * @install `pkgx github.com/KhronosGroup/Vulkan-Loader`
 * @aliases `github.com/KhronosGroup/Vulkan-Loader`, `KhronosGroup/Vulkan-Loader`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomKhronosGroupVulkanLoader
 * // Or access via domain
 * const samePkg = pantry.githubcomkhronosgroupvulkanloader
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "KhronosGroup"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/KhronosGroup/Vulkan/Loader.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomKhronosGroupVulkanLoaderPackage = {
  /**
   * The display name of this package.
   */
  name: 'KhronosGroup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/KhronosGroup/Vulkan/Loader' as const,
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
  installCommand: 'pkgx github.com/KhronosGroup/Vulkan-Loader' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/KhronosGroup/Vulkan-Loader',
    'KhronosGroup/Vulkan-Loader',
  ] as const,
  fullPath: 'github.com/KhronosGroup/Vulkan-Loader' as const,
}

export type GithubcomKhronosGroupVulkanLoaderPackage = typeof githubcomKhronosGroupVulkanLoaderPackage
