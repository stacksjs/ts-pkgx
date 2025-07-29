/**
 * **gopass** - Package from pantry: github.com/gopasspw/gopass
 *
 * @domain `github.com/gopasspw/gopass`
 *
 * @install `launchpad install github.com/gopasspw/gopass`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgopasspwgopass
 * console.log(pkg.name)        // "gopass"
 * console.log(pkg.description) // "Package from pantry: github.com/gopasspw/gopass"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gopasspw/gopass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgopasspwgopassPackage = {
  /**
   * The display name of this package.
   */
  name: 'gopass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gopasspw/gopass' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/gopasspw/gopass' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/gopasspw/gopass' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/gopasspw/gopass -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/gopasspw/gopass' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gopasspw/gopass/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgopasspwgopassPackage = typeof githubcomgopasspwgopassPackage
