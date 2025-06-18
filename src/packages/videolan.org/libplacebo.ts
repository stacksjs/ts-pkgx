/**
 * **libplacebo** - pkgx package
 *
 * @domain `videolan.org/libplacebo`
 * @version `7.351.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +videolan.org/libplacebo -- $SHELL -i`
 * @dependencies `littlecms.com^2`, `github.com/KhronosGroup/Vulkan-Loader^1.3.272`, `mesonbuild.com`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.videolanorglibplacebo
 * console.log(pkg.name)        // "libplacebo"
 * console.log(pkg.versions[0]) // "7.351.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/videolan-org/libplacebo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const videolanorglibplaceboPackage = {
  /**
   * The display name of this package.
   */
  name: 'libplacebo' as const,
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
  installCommand: 'launchpad install +videolan.org/libplacebo -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'littlecms.com^2',
    'github.com/KhronosGroup/Vulkan-Loader^1.3.272',
    'mesonbuild.com',
    'ninja-build.org',
    'python.org^3.11',
    'github.com/KhronosGroup/Vulkan-Headers',
    'curl.se',
    'gnu.org/gcc',
    'freedesktop.org/pkg-config',
    'gnu.org/gcc',
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
  aliases: [] as const,
}

export type VideolanorglibplaceboPackage = typeof videolanorglibplaceboPackage
