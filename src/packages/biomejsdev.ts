/**
 * **biomejs.dev** - Package from pantry: biomejs.dev
 *
 * @domain `biomejs.dev`
 *
 * @install `launchpad install biomejs.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.biomejsdev
 * console.log(pkg.name)        // "biomejs.dev"
 * console.log(pkg.description) // "Package from pantry: biomejs.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/biomejs-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const biomejsdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'biomejs.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'biomejs.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: biomejs.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install biomejs.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +biomejs.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install biomejs.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/biomejs.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BiomejsdevPackage = typeof biomejsdevPackage
