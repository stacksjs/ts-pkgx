/**
 * **rye.astral.sh** - Package from pantry: rye.astral.sh
 *
 * @domain `rye.astral.sh`
 *
 * @install `launchpad install rye.astral.sh`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ryeastralsh
 * console.log(pkg.name)        // "rye.astral.sh"
 * console.log(pkg.description) // "Package from pantry: rye.astral.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rye-astral-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ryeastralshPackage = {
  /**
   * The display name of this package.
   */
  name: 'rye.astral.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rye.astral.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rye.astral.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rye.astral.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rye.astral.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RyeastralshPackage = typeof ryeastralshPackage
