/**
 * **SourceKitten** - Package from pantry: github.com/jpsim/SourceKitten
 *
 * @domain `github.com/jpsim/SourceKitten`
 *
 * @install `launchpad install github.com/jpsim/SourceKitten`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjpsimsourcekitten
 * console.log(pkg.name)        // "SourceKitten"
 * console.log(pkg.description) // "Package from pantry: github.com/jpsim/SourceKitten"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jpsim/SourceKitten.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjpsimsourcekittenPackage = {
  /**
   * The display name of this package.
   */
  name: 'SourceKitten' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jpsim/SourceKitten' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jpsim/SourceKitten' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jpsim/SourceKitten' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jpsim/SourceKitten -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jpsim/SourceKitten' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jpsim/SourceKitten/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjpsimsourcekittenPackage = typeof githubcomjpsimsourcekittenPackage
