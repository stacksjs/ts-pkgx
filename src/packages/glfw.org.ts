/**
 * **+glfw.org -- $SHELL -i** - A multi-platform library for OpenGL, OpenGL ES, Vulkan, window and input
 *
 * @domain `glfw.org`
 * @version `3.4.0` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/glfw-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +glfw.org -- $SHELL -i`
 * @aliases `+glfw.org -- $SHELL -i`
 * @dependencies `linuxfreeglut.sourceforge.io^3.4x.org/xcursor^1.2xkbcommon.org^1.0mesa3d.org^23.3`, `freeglut.sourceforge.io^3.4`, `x.org/xcursor^1.2`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.glfworgSHELLi
 * // Or access via domain
 * const samePkg = pantry.glfworg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "glfw.org"
 * console.log(pkg.description) // "A multi-platform library for OpenGL, OpenGL ES,..."
 * console.log(pkg.versions[0]) // "3.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glfw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glfworgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'glfw.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glfw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A multi-platform library for OpenGL, OpenGL ES, Vulkan, window and input' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glfw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +glfw.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxfreeglut.sourceforge.io^3.4x.org/xcursor^1.2xkbcommon.org^1.0mesa3d.org^23.3',
    'freeglut.sourceforge.io^3.4',
    'x.org/xcursor^1.2',
    'xkbcommon.org^1.0',
    'mesa3d.org^23.3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.0',
    '3.3.10',
    '3.3.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+glfw.org -- $SHELL -i',
  ] as const,
  fullPath: 'glfw.org' as const,
}

export type GlfworgSHELLiPackage = typeof glfworgSHELLiPackage
