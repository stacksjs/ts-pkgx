/**
 * **github.com/Everduin94/better-commits** - pkgx package
 *
 * @domain `github.com/Everduin94/better-commits`
 * @programs `bcommits`, `better-branch`, `better-commits`, `better-commits-init`, `git-bc`
 * @version `1.18.0` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/Everduin94/better-commits`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomeverduin94bettercommits
 * console.log(pkg.name)        // "github.com/Everduin94/better-commits"
 * console.log(pkg.programs)    // ["bcommits", "better-branch", ...]
 * console.log(pkg.versions[0]) // "1.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Everduin94/better-commits.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomeverduin94bettercommitsPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/Everduin94/better-commits' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Everduin94/better-commits' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Everduin94/better-commits/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Everduin94/better-commits' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bcommits',
    'better-branch',
    'better-commits',
    'better-commits-init',
    'git-bc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.18.0',
    '1.17.1',
    '1.17.0',
    '1.16.1',
    '1.16.0',
    '1.15.7',
    '1.15.6',
    '1.15.5',
    '1.15.4',
    '1.15.3',
    '1.15.0',
    '1.14.0',
    '1.13.0',
    '1.12.0',
    '1.11.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Everduin94/better-commits -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Everduin94/better-commits' as const,
}

export type Githubcomeverduin94bettercommitsPackage = typeof githubcomeverduin94bettercommitsPackage
