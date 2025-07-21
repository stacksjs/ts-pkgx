/**
 * **gnome-extensions-cli** - Package from pantry: github.com/essembeh/gnome-extensions-cli
 *
 * @domain `github.com/essembeh/gnome-extensions-cli`
 *
 * @install `launchpad install github.com/essembeh/gnome-extensions-cli`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomessembehgnomeextensionscli
 * console.log(pkg.name)        // "gnome-extensions-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/essembeh/gnome-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/essembeh/gnome-extensions-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomessembehgnomeextensionscliPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome-extensions-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/essembeh/gnome-extensions-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/essembeh/gnome-extensions-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/essembeh/gnome-extensions-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/essembeh/gnome-extensions-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/essembeh/gnome-extensions-cli' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/essembeh/gnome-extensions-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomessembehgnomeextensionscliPackage = typeof githubcomessembehgnomeextensionscliPackage
