/**
 * **github.com/essembeh/gnome-extensions-cli** - pkgx package
 *
 * @domain `github.com/essembeh/gnome/extensions-cli`
 *
 * @install `pkgx github.com/essembeh/gnome-extensions-cli`
 * @aliases `github.com/essembeh/gnome-extensions-cli`, `essembeh/gnome-extensions-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomessembehgnomeextensionscli
 * // Or access via domain
 * const samePkg = pantry.githubcomessembehgnomeextensionscli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "essembeh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/essembeh/gnome/extensions-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomessembehgnomeextensionscliPackage = {
  /**
   * The display name of this package.
   */
  name: 'essembeh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/essembeh/gnome/extensions-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/essembeh/gnome-extensions-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/essembeh/gnome-extensions-cli',
    'essembeh/gnome-extensions-cli',
  ] as const,
  fullPath: 'github.com/essembeh/gnome-extensions-cli' as const,
}

export type GithubcomessembehgnomeextensionscliPackage = typeof githubcomessembehgnomeextensionscliPackage
