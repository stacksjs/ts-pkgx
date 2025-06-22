/**
 * **util-linux** - Package from pantry: github.com/util-linux/util-linux
 *
 * @domain `github.com/util-linux/util-linux`
 *
 * @install `launchpad install github.com/util-linux/util-linux`
 * @dependencies `gnu.org/gettext^0`, `sqlite.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomutillinuxutillinux
 * console.log(pkg.name)        // "util-linux"
 * console.log(pkg.description) // "Package from pantry: github.com/util-linux/util..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/util-linux/util-linux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomutillinuxutillinuxPackage = {
  /**
   * The display name of this package.
   */
  name: 'util-linux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/util-linux/util-linux' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/util-linux/util-linux' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/util-linux/util-linux' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/util-linux/util-linux -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/util-linux/util-linux' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0',
    'sqlite.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/util-linux/util-linux/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomutillinuxutillinuxPackage = typeof githubcomutillinuxutillinuxPackage
