/**
 * **golangci-lint** - Fast linters runner for Go
 *
 * @domain `golangci-lint.run`
 * @programs `golangci-lint`
 * @version `2.1.6` (52 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install golangci-lint`
 * @aliases `golangci-lint`
 * @dependencies `curl.se`, `info-zip.org/unzip`, `go.dev^1.17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.golangcilint
 * // Or access via domain
 * const samePkg = pantry.golangcilintrun
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "golangci-lint.run"
 * console.log(pkg.description) // "Fast linters runner for Go"
 * console.log(pkg.programs)    // ["golangci-lint"]
 * console.log(pkg.versions[0]) // "2.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/golangci-lint-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const golangcilintPackage = {
  /**
   * The display name of this package.
   */
  name: 'golangci-lint.run' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'golangci-lint.run' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast linters runner for Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/golangci-lint.run/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install golangci-lint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'golangci-lint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
    'info-zip.org/unzip',
    'go.dev^1.17',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.6',
    '2.1.5',
    '2.1.4',
    '2.1.3',
    '2.1.2',
    '2.1.1',
    '2.1.0',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.64.8',
    '1.64.7',
    '1.64.6',
    '1.64.5',
    '1.64.4',
    '1.64.3',
    '1.64.2',
    '1.63.4',
    '1.63.3',
    '1.63.2',
    '1.63.1',
    '1.63.0',
    '1.62.2',
    '1.62.0',
    '1.61.0',
    '1.60.3',
    '1.60.2',
    '1.60.1',
    '1.59.1',
    '1.59.0',
    '1.58.2',
    '1.58.1',
    '1.58.0',
    '1.57.2',
    '1.57.1',
    '1.57.0',
    '1.56.2',
    '1.56.1',
    '1.56.0',
    '1.55.2',
    '1.55.1',
    '1.55.0',
    '1.54.2',
    '1.54.1',
    '1.53.3',
    '1.53.2',
    '1.53.1',
    '1.53.0',
    '1.52.2',
    '1.52.1',
    '1.52.0',
    '1.51.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'golangci-lint',
  ] as const,
}

export type GolangcilintPackage = typeof golangcilintPackage
