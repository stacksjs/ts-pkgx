/**
 * **chruby** - Package from pantry: github.com/postmodern/chruby
 *
 * @domain `github.com/postmodern/chruby`
 *
 * @install `launchpad install github.com/postmodern/chruby`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompostmodernchruby
 * console.log(pkg.name)        // "chruby"
 * console.log(pkg.description) // "Package from pantry: github.com/postmodern/chruby"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/postmodern/chruby.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompostmodernchrubyPackage = {
  /**
   * The display name of this package.
   */
  name: 'chruby' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/postmodern/chruby' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/postmodern/chruby' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/postmodern/chruby' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/postmodern/chruby -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/postmodern/chruby' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/postmodern/chruby/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompostmodernchrubyPackage = typeof githubcompostmodernchrubyPackage
