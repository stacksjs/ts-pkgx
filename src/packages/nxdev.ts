/**
 * **nx.dev** - Package from pantry: nx.dev
 *
 * @domain `nx.dev`
 *
 * @install `launchpad install nx.dev`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nxdev
 * console.log(pkg.name)        // "nx.dev"
 * console.log(pkg.description) // "Package from pantry: nx.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nxdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'nx.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nx.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nx.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nx.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nx.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nx.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nx.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NxdevPackage = typeof nxdevPackage
