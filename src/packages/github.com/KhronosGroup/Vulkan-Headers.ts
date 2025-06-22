/**
 * **Vulkan-Headers** - Package from pantry: github.com/KhronosGroup/Vulkan-Headers
 *
 * @domain `github.com/KhronosGroup/Vulkan-Headers`
 *
 * @install `launchpad install github.com/KhronosGroup/Vulkan-Headers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkhronosgroupvulkanheaders
 * console.log(pkg.name)        // "Vulkan-Headers"
 * console.log(pkg.description) // "Package from pantry: github.com/KhronosGroup/Vu..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/KhronosGroup/Vulkan-Headers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkhronosgroupvulkanheadersPackage = {
  /**
   * The display name of this package.
   */
  name: 'Vulkan-Headers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/KhronosGroup/Vulkan-Headers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/KhronosGroup/Vulkan-Headers' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/KhronosGroup/Vulkan-Headers' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/KhronosGroup/Vulkan-Headers -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/KhronosGroup/Vulkan-Headers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/KhronosGroup/Vulkan-Headers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkhronosgroupvulkanheadersPackage = typeof githubcomkhronosgroupvulkanheadersPackage
