/**
 * **glslc** - A collection of tools, libraries, and tests for Vulkan shader compilation.
 *
 * @domain `github.com/google/shaderc`
 * @programs `glslc`
 * @version `2025.2.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) glslc`
 * @name `glslc`
 * @aliases `google/shaderc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.glslc
 * // Or access via domain
 * const samePkg = pantry.githubcomgoogleshaderc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "glslc"
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
  name: 'glslc' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) glslc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'glslc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
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
    'google/shaderc',
  ] as const,
  fullPath: 'github.com/google/shaderc' as const,
}

export type GlslcPackage = typeof glslcPackage
