/**
 * **glew.sourceforge.io** - The OpenGL Extension Wrangler Library
 *
 * @domain `glew.sourceforge.io`
 * @programs `glewinfo`, `visualinfo`
 * @version `2.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install glew.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glewsourceforgeio
 * console.log(pkg.name)        // "glew.sourceforge.io"
 * console.log(pkg.description) // "The OpenGL Extension Wrangler Library"
 * console.log(pkg.programs)    // ["glewinfo", "visualinfo"]
 * console.log(pkg.versions[0]) // "2.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glew-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glewsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'glew.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glew.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The OpenGL Extension Wrangler Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glew.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install glew.sourceforge.io' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'glewinfo',
    'visualinfo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +glew.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install glew.sourceforge.io' as const,
}

export type GlewsourceforgeioPackage = typeof glewsourceforgeioPackage
