/**
 * **glfw.org** - Crafters of fine Open Source products
 *
 * @domain `glfw.org`
 *
 * @install `pkgx glfw.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glfworg
 * console.log(pkg.name)        // "glfw.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glfw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glfworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'glfw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/glfw.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glfw.org' as const,
  fullPath: 'glfw.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx glfw.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GlfworgPackage = typeof glfworgPackage
