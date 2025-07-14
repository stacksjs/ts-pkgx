/**
 * **proj.org** - Package from pantry: proj.org
 *
 * @domain `proj.org`
 *
 * @install `launchpad install proj.org`
 * @dependencies `simplesystems.org/libtiff`, `sqlite.org`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projorg
 * console.log(pkg.name)        // "proj.org"
 * console.log(pkg.description) // "Package from pantry: proj.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/proj-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'proj.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'proj.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: proj.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install proj.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +proj.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install proj.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'simplesystems.org/libtiff',
    'sqlite.org',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/proj.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ProjorgPackage = typeof projorgPackage
