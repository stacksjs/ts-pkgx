/**
 * **counterfeiter** - Package from pantry: github.com/maxbrunsfeld/counterfeiter
 *
 * @domain `github.com/maxbrunsfeld/counterfeiter`
 *
 * @install `launchpad install github.com/maxbrunsfeld/counterfeiter`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommaxbrunsfeldcounterfeiter
 * console.log(pkg.name)        // "counterfeiter"
 * console.log(pkg.description) // "Package from pantry: github.com/maxbrunsfeld/co..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maxbrunsfeld/counterfeiter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommaxbrunsfeldcounterfeiterPackage = {
  /**
   * The display name of this package.
   */
  name: 'counterfeiter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maxbrunsfeld/counterfeiter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/maxbrunsfeld/counterfeiter' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/maxbrunsfeld/counterfeiter' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/maxbrunsfeld/counterfeiter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/maxbrunsfeld/counterfeiter' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maxbrunsfeld/counterfeiter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommaxbrunsfeldcounterfeiterPackage = typeof githubcommaxbrunsfeldcounterfeiterPackage
