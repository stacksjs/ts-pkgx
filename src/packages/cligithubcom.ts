/**
 * **gh** - GitHub’s official command line tool
 *
 * @domain `cli.github.com`
 * @programs `gh`
 * @version `2.82.0` (89 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cli.github.com`
 * @homepage https://cli.github.com/
 * @buildDependencies `go.dev@^1.18` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cligithubcom
 * console.log(pkg.name)        // "gh"
 * console.log(pkg.description) // "GitHub’s official command line tool"
 * console.log(pkg.programs)    // ["gh"]
 * console.log(pkg.versions[0]) // "2.82.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cli-github-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cligithubcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'gh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cli.github.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GitHub’s official command line tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cli.github.com/package.yml' as const,
  homepageUrl: 'https://cli.github.com/' as const,
  githubUrl: 'https://github.com/cli/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cli.github.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cli.github.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cli.github.com' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gh',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'go.dev@^1.18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.82.0',
    '2.81.0',
    '2.80.0',
    '2.79.0',
    '2.78.0',
    '2.77.0',
    '2.76.2',
    '2.76.1',
    '2.76.0',
    '2.75.1',
    '2.75.0',
    '2.74.2',
    '2.74.1',
    '2.74.0',
    '2.73.0',
    '2.72.0',
    '2.71.2',
    '2.71.1',
    '2.71.0',
    '2.70.0',
    '2.69.0',
    '2.68.1',
    '2.68.0',
    '2.67.0',
    '2.66.1',
    '2.66.0',
    '2.65.0',
    '2.64.0',
    '2.63.2',
    '2.63.1',
    '2.63.0',
    '2.62.0',
    '2.61.0',
    '2.60.1',
    '2.60.0',
    '2.59.0',
    '2.58.0',
    '2.57.0',
    '2.56.0',
    '2.55.0',
    '2.54.0',
    '2.53.0',
    '2.52.0',
    '2.51.0',
    '2.50.0',
    '2.49.2',
    '2.49.1',
    '2.49.0',
    '2.48.0',
    '2.47.0',
    '2.46.0',
    '2.45.0',
    '2.44.1',
    '2.44.0',
    '2.43.1',
    '2.43.0',
    '2.42.1',
    '2.42.0',
    '2.41.0',
    '2.40.1',
    '2.40.0',
    '2.39.2',
    '2.39.1',
    '2.39.0',
    '2.38.0',
    '2.37.0',
    '2.36.0',
    '2.35.0',
    '2.34.0',
    '2.33.0',
    '2.32.1',
    '2.32.0',
    '2.31.0',
    '2.30.0',
    '2.29.0',
    '2.27.0',
    '2.26.1',
    '2.26.0',
    '2.25.1',
    '2.25.0',
    '2.24.3',
    '2.24.2',
    '2.24.1',
    '2.24.0',
    '2.23.0',
    '2.22.1',
    '2.22.0',
    '2.21.2',
    '2.20.2',
  ] as const,
  aliases: [] as const,
}

export type CligithubcomPackage = typeof cligithubcomPackage
