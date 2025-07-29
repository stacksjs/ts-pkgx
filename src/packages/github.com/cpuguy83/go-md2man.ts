/**
 * **go-md2man** - Package from pantry: github.com/cpuguy83/go-md2man
 *
 * @domain `github.com/cpuguy83/go-md2man`
 *
 * @install `launchpad install github.com/cpuguy83/go-md2man`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcpuguy83gomd2man
 * console.log(pkg.name)        // "go-md2man"
 * console.log(pkg.description) // "Package from pantry: github.com/cpuguy83/go-md2man"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cpuguy83/go-md2man.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcpuguy83gomd2manPackage = {
  /**
   * The display name of this package.
   */
  name: 'go-md2man' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cpuguy83/go-md2man' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cpuguy83/go-md2man' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cpuguy83/go-md2man' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cpuguy83/go-md2man -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cpuguy83/go-md2man' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cpuguy83/go-md2man/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomcpuguy83gomd2manPackage = typeof githubcomcpuguy83gomd2manPackage
