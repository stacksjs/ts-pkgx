/**
 * **ruby-install** - Package from pantry: github.com/postmodern/ruby-install
 *
 * @domain `github.com/postmodern/ruby-install`
 *
 * @install `launchpad install github.com/postmodern/ruby-install`
 * @dependencies `tukaani.org/xz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompostmodernrubyinstall
 * console.log(pkg.name)        // "ruby-install"
 * console.log(pkg.description) // "Package from pantry: github.com/postmodern/ruby..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/postmodern/ruby-install.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompostmodernrubyinstallPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruby-install' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/postmodern/ruby-install' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/postmodern/ruby-install' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/postmodern/ruby-install' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/postmodern/ruby-install -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/postmodern/ruby-install' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'tukaani.org/xz',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/postmodern/ruby-install/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompostmodernrubyinstallPackage = typeof githubcompostmodernrubyinstallPackage
