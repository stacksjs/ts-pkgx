/**
 * **github.com/khronosgroup/vulkan-loader** - Vulkan Loader
 *
 * @domain `github.com/KhronosGroup/Vulkan-Loader`
 * @version `1.4.318` (56 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/KhronosGroup/Vulkan-Loader -- $SHELL -i`
 * @aliases `github.com/khronosgroup/vulkan-loader`, `KhronosGroup/Vulkan-Loader`
 * @dependencies `github.com/KhronosGroup/Vulkan-Headers`, `linuxx.org/x11x.org/xcbwayland.freedesktop.org`, `x.org/x11`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomkhronosgroupvulkanloader
 * // Or access via domain
 * const samePkg = pantry.githubcomkhronosgroupvulkanloader
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/KhronosGroup/Vulkan-Loader"
 * console.log(pkg.description) // "Vulkan Loader"
 * console.log(pkg.versions[0]) // "1.4.318" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/KhronosGroup/Vulkan-Loader.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkhronosgroupvulkanloaderPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/KhronosGroup/Vulkan-Loader' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/KhronosGroup/Vulkan-Loader' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Vulkan Loader' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/KhronosGroup/Vulkan-Loader/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/KhronosGroup/Vulkan-Loader -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/KhronosGroup/Vulkan-Headers',
    'linuxx.org/x11x.org/xcbwayland.freedesktop.org',
    'x.org/x11',
    'x.org/xcb',
    'wayland.freedesktop.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.318',
    '1.4.317',
    '1.4.316',
    '1.4.315',
    '1.4.314',
    '1.4.313',
    '1.4.312',
    '1.4.311',
    '1.4.310',
    '1.4.309',
    '1.4.307',
    '1.4.306',
    '1.4.305',
    '1.4.304',
    '1.4.303',
    '1.3.302',
    '1.3.301',
    '1.3.300',
    '1.3.299',
    '1.3.298',
    '1.3.297',
    '1.3.296',
    '1.3.295',
    '1.3.294',
    '1.3.293',
    '1.3.292',
    '1.3.290',
    '1.3.289',
    '1.3.288',
    '1.3.287',
    '1.3.286',
    '1.3.285',
    '1.3.284',
    '1.3.283',
    '1.3.282',
    '1.3.281',
    '1.3.280',
    '1.3.279',
    '1.3.278',
    '1.3.277',
    '1.3.276',
    '1.3.275',
    '1.3.274',
    '1.3.273',
    '1.3.272',
    '1.3.271',
    '1.3.270',
    '1.3.269',
    '1.3.268',
    '1.3.267',
    '1.3.266',
    '1.3.265',
    '1.3.264',
    '1.3.263',
    '1.3.262',
    '1.3.261',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/khronosgroup/vulkan-loader',
    'KhronosGroup/Vulkan-Loader',
  ] as const,
  fullPath: 'github.com/KhronosGroup/Vulkan-Loader' as const,
}

export type GithubcomkhronosgroupvulkanloaderPackage = typeof githubcomkhronosgroupvulkanloaderPackage
