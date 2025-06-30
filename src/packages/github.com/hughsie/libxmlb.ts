/**
 * **libxmlb** - Package from pantry: github.com/hughsie/libxmlb
 *
 * @domain `github.com/hughsie/libxmlb`
 *
 * @install `launchpad install github.com/hughsie/libxmlb`
 * @dependencies `gnome.org/glib@2`, `tukaani.org/xz@5`, `facebook.com/zstd@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomhughsielibxmlb
 * console.log(pkg.name)        // "libxmlb"
 * console.log(pkg.description) // "Package from pantry: github.com/hughsie/libxmlb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hughsie/libxmlb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomhughsielibxmlbPackage = {
  /**
   * The display name of this package.
   */
  name: 'libxmlb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hughsie/libxmlb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/hughsie/libxmlb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/hughsie/libxmlb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/hughsie/libxmlb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/hughsie/libxmlb' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
    'tukaani.org/xz@5',
    'facebook.com/zstd@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hughsie/libxmlb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomhughsielibxmlbPackage = typeof githubcomhughsielibxmlbPackage
