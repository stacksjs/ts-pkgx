/**
 * **glew.sourceforge.io** - Package from pantry: glew.sourceforge.io
 *
 * @domain `glew.sourceforge.io`
 *
 * @install `launchpad install glew.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glewsourceforgeio
 * console.log(pkg.name)        // "glew.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: glew.sourceforge.io"
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
  description: 'Package from pantry: glew.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install glew.sourceforge.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +glew.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install glew.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glew.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GlewsourceforgeioPackage = typeof glewsourceforgeioPackage
