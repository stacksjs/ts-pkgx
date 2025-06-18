/**
 * **glfw.org** - A multi-platform library for OpenGL, OpenGL ES, Vulkan, window and input
 *
 * @domain `glfw.org`
 * @version `3.4.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +glfw.org -- $SHELL -i`
 * @dependencies `freeglut.sourceforge.io^3.4`, `x.org/xcursor^1.2`, `xkbcommon.org^1.0`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glfworg
 * console.log(pkg.name)        // "glfw.org"
 * console.log(pkg.description) // "A multi-platform library for OpenGL, OpenGL ES,..."
 * console.log(pkg.versions[0]) // "3.4.0" (latest)
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
   * The canonical domain name for this package.
   */
  domain: 'glfw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A multi-platform library for OpenGL, OpenGL ES, Vulkan, window and input' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glfw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/glfw/glfw' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +glfw.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freeglut.sourceforge.io^3.4',
    'x.org/xcursor^1.2',
    'xkbcommon.org^1.0',
    'mesa3d.org^23.3',
    'cmake.org',
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
  aliases: [] as const,
}

export type GlfworgPackage = typeof glfworgPackage
