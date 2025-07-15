/**
 * **z** - Package from pantry: github.com/rupa/z
 *
 * @domain `github.com/rupa/z`
 *
 * @install `launchpad install github.com/rupa/z`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomrupaz
 * console.log(pkg.name)        // "z"
 * console.log(pkg.description) // "Package from pantry: github.com/rupa/z"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rupa/z.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrupazPackage = {
  /**
   * The display name of this package.
   */
  name: 'z' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rupa/z' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/rupa/z' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/rupa/z' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/rupa/z -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/rupa/z' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rupa/z/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomrupazPackage = typeof githubcomrupazPackage
