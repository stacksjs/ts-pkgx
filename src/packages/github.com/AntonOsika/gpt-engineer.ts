/**
 * **gpt-engineer** - Package from pantry: github.com/AntonOsika/gpt-engineer
 *
 * @domain `github.com/AntonOsika/gpt-engineer`
 *
 * @install `launchpad install github.com/AntonOsika/gpt-engineer`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomantonosikagptengineer
 * console.log(pkg.name)        // "gpt-engineer"
 * console.log(pkg.description) // "Package from pantry: github.com/AntonOsika/gpt-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AntonOsika/gpt-engineer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomantonosikagptengineerPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpt-engineer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AntonOsika/gpt-engineer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/AntonOsika/gpt-engineer' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/AntonOsika/gpt-engineer' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/AntonOsika/gpt-engineer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/AntonOsika/gpt-engineer' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AntonOsika/gpt-engineer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomantonosikagptengineerPackage = typeof githubcomantonosikagptengineerPackage
