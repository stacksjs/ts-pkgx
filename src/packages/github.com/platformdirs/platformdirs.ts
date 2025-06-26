/**
 * **platformdirs** - Package from pantry: github.com/platformdirs/platformdirs
 *
 * @domain `github.com/platformdirs/platformdirs`
 *
 * @install `launchpad install github.com/platformdirs/platformdirs`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomplatformdirsplatformdirs
 * console.log(pkg.name)        // "platformdirs"
 * console.log(pkg.description) // "Package from pantry: github.com/platformdirs/pl..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/platformdirs/platformdirs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomplatformdirsplatformdirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'platformdirs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/platformdirs/platformdirs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/platformdirs/platformdirs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/platformdirs/platformdirs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/platformdirs/platformdirs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/platformdirs/platformdirs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/platformdirs/platformdirs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomplatformdirsplatformdirsPackage = typeof githubcomplatformdirsplatformdirsPackage
