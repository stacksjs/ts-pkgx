/**
 * **pdm.fming.dev** - Package from pantry: pdm.fming.dev
 *
 * @domain `pdm.fming.dev`
 *
 * @install `launchpad install pdm.fming.dev`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pdmfmingdev
 * console.log(pkg.name)        // "pdm.fming.dev"
 * console.log(pkg.description) // "Package from pantry: pdm.fming.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pdm-fming-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pdmfmingdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'pdm.fming.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pdm.fming.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pdm.fming.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pdm.fming.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pdm.fming.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PdmfmingdevPackage = typeof pdmfmingdevPackage
