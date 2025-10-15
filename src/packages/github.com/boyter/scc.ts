/**
 * **scc** - Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go
 *
 * @domain `github.com/boyter/scc`
 * @programs `scc`
 * @version `3.5.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/boyter/scc`
 * @dependencies `go.dev@^1.14`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomboyterscc
 * console.log(pkg.name)        // "scc"
 * console.log(pkg.description) // "Sloc, Cloc and Code: scc is a very fast accurat..."
 * console.log(pkg.programs)    // ["scc"]
 * console.log(pkg.versions[0]) // "3.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/boyter/scc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomboytersccPackage = {
  /**
   * The display name of this package.
   */
  name: 'scc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/boyter/scc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/boyter/scc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/boyter/scc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/boyter/scc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/boyter/scc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/boyter/scc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev@^1.14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.0',
    '3.4.0',
    '3.3.5',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomboytersccPackage = typeof githubcomboytersccPackage
