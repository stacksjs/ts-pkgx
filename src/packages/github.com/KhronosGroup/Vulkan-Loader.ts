/**
 * **Vulkan-Loader** - Package from pantry: github.com/KhronosGroup/Vulkan-Loader
 *
 * @domain `github.com/KhronosGroup/Vulkan-Loader`
 *
 * @install `launchpad install github.com/KhronosGroup/Vulkan-Loader`
 * @dependencies `github.com/KhronosGroup/Vulkan-Headers`, `linux:x.org/x11`, `linux:x.org/xcb`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkhronosgroupvulkanloader
 * console.log(pkg.name)        // "Vulkan-Loader"
 * console.log(pkg.description) // "Package from pantry: github.com/KhronosGroup/Vu..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/KhronosGroup/Vulkan-Loader.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkhronosgroupvulkanloaderPackage = {
  /**
   * The display name of this package.
   */
  name: 'Vulkan-Loader' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/KhronosGroup/Vulkan-Loader' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/KhronosGroup/Vulkan-Loader' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/KhronosGroup/Vulkan-Loader' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/KhronosGroup/Vulkan-Loader -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/KhronosGroup/Vulkan-Loader' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/KhronosGroup/Vulkan-Headers',
    'linux:x.org/x11',
    'linux:x.org/xcb',
    'linux:wayland.freedesktop.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/KhronosGroup/Vulkan-Loader/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkhronosgroupvulkanloaderPackage = typeof githubcomkhronosgroupvulkanloaderPackage
