/**
 * **pyparsing** - Package from pantry: github.com/pyparsing/pyparsing
 *
 * @domain `github.com/pyparsing/pyparsing`
 *
 * @install `launchpad install github.com/pyparsing/pyparsing`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompyparsingpyparsing
 * console.log(pkg.name)        // "pyparsing"
 * console.log(pkg.description) // "Package from pantry: github.com/pyparsing/pypar..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pyparsing/pyparsing.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompyparsingpyparsingPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyparsing' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pyparsing/pyparsing' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/pyparsing/pyparsing' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/pyparsing/pyparsing' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/pyparsing/pyparsing -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/pyparsing/pyparsing' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pyparsing/pyparsing/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompyparsingpyparsingPackage = typeof githubcompyparsingpyparsingPackage
