/**
 * **git-branchless** - High-velocity, monorepo-scale workflow for Git
 *
 * @domain `crates.io/git-branchless`
 * @programs `git-branchless`
 * @version `0.10.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-branchless`
 * @name `git-branchless`
 * @dependencies `libgit2.org@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitbranchless
 * // Or access via domain
 * const samePkg = pantry.cratesiogitbranchless
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-branchless"
 * console.log(pkg.description) // "High-velocity, monorepo-scale workflow for Git"
 * console.log(pkg.programs)    // ["git-branchless"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-branchless.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitbranchlessPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-branchless' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-branchless' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'High-velocity, monorepo-scale workflow for Git' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-branchless/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-branchless' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-branchless',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) git-branchless -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-branchless' as const,
}

export type GitbranchlessPackage = typeof gitbranchlessPackage
