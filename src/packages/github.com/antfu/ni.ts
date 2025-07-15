/**
 * **ni** - Package from pantry: github.com/antfu/ni
 *
 * @domain `github.com/antfu/ni`
 *
 * @install `launchpad install github.com/antfu/ni`
 * @dependencies `nodejs.org>=14`, `npmjs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomantfuni
 * console.log(pkg.name)        // "ni"
 * console.log(pkg.description) // "Package from pantry: github.com/antfu/ni"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/antfu/ni.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomantfuniPackage = {
  /**
   * The display name of this package.
   */
  name: 'ni' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/antfu/ni' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/antfu/ni' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/antfu/ni' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/antfu/ni -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/antfu/ni' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org>=14',
    'npmjs.com',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/antfu/ni/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomantfuniPackage = typeof githubcomantfuniPackage
