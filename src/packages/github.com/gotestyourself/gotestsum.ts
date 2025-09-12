/**
 * **gotestsum** - 'go test' runner with output optimized for humans, JUnit XML for CI integration, and a summary of the test results.
 *
 * @domain `github.com/gotestyourself/gotestsum`
 * @programs `gotestsum`
 * @version `1.13.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gotestsum`
 * @name `gotestsum`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gotestsum
 * // Or access via domain
 * const samePkg = pantry.githubcomgotestyourselfgotestsum
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gotestsum"
 * console.log(pkg.description) // "'go test' runner with output optimized for huma..."
 * console.log(pkg.programs)    // ["gotestsum"]
 * console.log(pkg.versions[0]) // "1.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gotestyourself/gotestsum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gotestsumPackage = {
  /**
   * The display name of this package.
   */
  name: 'gotestsum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gotestyourself/gotestsum' as const,
  /**
   * Brief description of what this package does.
   */
  description: '\'go test\' runner with output optimized for humans, JUnit XML for CI integration, and a summary of the test results.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gotestyourself/gotestsum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/gotestyourself/gotestsum' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gotestsum' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gotestsum',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.13.0',
    '1.12.3',
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gotestsum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gotestsum' as const,
}

export type GotestsumPackage = typeof gotestsumPackage
