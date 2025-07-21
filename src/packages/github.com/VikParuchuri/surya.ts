/**
 * **surya** - Package from pantry: github.com/VikParuchuri/surya
 *
 * @domain `github.com/VikParuchuri/surya`
 *
 * @install `launchpad install github.com/VikParuchuri/surya`
 * @dependencies `pkgx.sh^1`, `linux:mesa3d.org^23.3`, `linux:gnome.org/glib^2`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomvikparuchurisurya
 * console.log(pkg.name)        // "surya"
 * console.log(pkg.description) // "Package from pantry: github.com/VikParuchuri/surya"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/VikParuchuri/surya.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomvikparuchurisuryaPackage = {
  /**
   * The display name of this package.
   */
  name: 'surya' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/VikParuchuri/surya' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/VikParuchuri/surya' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/VikParuchuri/surya' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/VikParuchuri/surya -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/VikParuchuri/surya' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'pkgx.sh^1',
    'linux:mesa3d.org^23.3',
    'linux:gnome.org/glib^2',
    'linux:mupdf.com',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/VikParuchuri/surya/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomvikparuchurisuryaPackage = typeof githubcomvikparuchurisuryaPackage
