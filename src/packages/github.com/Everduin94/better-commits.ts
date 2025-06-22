/**
 * **better-commits** - Package from pantry: github.com/Everduin94/better-commits
 *
 * @domain `github.com/Everduin94/better-commits`
 *
 * @install `launchpad install github.com/Everduin94/better-commits`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomeverduin94bettercommits
 * console.log(pkg.name)        // "better-commits"
 * console.log(pkg.description) // "Package from pantry: github.com/Everduin94/bett..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Everduin94/better-commits.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomeverduin94bettercommitsPackage = {
  /**
   * The display name of this package.
   */
  name: 'better-commits' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Everduin94/better-commits' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Everduin94/better-commits' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Everduin94/better-commits' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Everduin94/better-commits -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Everduin94/better-commits' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Everduin94/better-commits/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomeverduin94bettercommitsPackage = typeof githubcomeverduin94bettercommitsPackage
