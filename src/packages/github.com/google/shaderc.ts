/**
 * **glslc** - A collection of tools, libraries, and tests for Vulkan shader compilation.
 *
 * @domain `github.com/google/shaderc`
 * @programs `glslc`
 * @version `2025.2.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install glslc`
 * @aliases `glslc`
 * @dependencies `cmake.org`, `python.org~3.12`, `git-scm.org^2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.glslc
 * // Or access via domain
 * const samePkg = pantry.githubcomgoogleshaderc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shaderc"
 * console.log(pkg.description) // "A collection of tools, libraries, and tests for..."
 * console.log(pkg.programs)    // ["glslc"]
 * console.log(pkg.versions[0]) // "2025.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/shaderc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glslcPackage = {
  /**
   * The display name of this package.
   */
  name: 'shaderc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/shaderc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A collection of tools, libraries, and tests for Vulkan shader compilation.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/shaderc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install glslc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'glslc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'python.org~3.12',
    'git-scm.org^2',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.2.0',
    '2025.1.0',
    '2024.4.0',
    '2024.3.0',
    '2024.2.0',
    '2024.1.0',
    '2024.0.0',
    '2023.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'glslc',
  ] as const,
}

export type GlslcPackage = typeof glslcPackage
