/**
 * **openplayground** - Package from pantry: github.com/nat/openplayground
 *
 * @domain `github.com/nat/openplayground`
 *
 * @install `launchpad install github.com/nat/openplayground`
 * @dependencies `python.org~3.11`, `gnu.org/bash`, `tea.xyz^0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnatopenplayground
 * console.log(pkg.name)        // "openplayground"
 * console.log(pkg.description) // "Package from pantry: github.com/nat/openplayground"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nat/openplayground.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnatopenplaygroundPackage = {
  /**
   * The display name of this package.
   */
  name: 'openplayground' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nat/openplayground' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nat/openplayground' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nat/openplayground' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nat/openplayground -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nat/openplayground' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'gnu.org/bash',
    'tea.xyz^0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nat/openplayground/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnatopenplaygroundPackage = typeof githubcomnatopenplaygroundPackage
