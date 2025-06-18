/**
 * **essembeh/gnome-extensions-cli** - Command line tool to manage your Gnome Shell extensions
 *
 * @domain `github.com/essembeh/gnome-extensions-cli`
 * @programs `gnome-extensions-cli`, `gext`
 * @version `0.10.5` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/essembeh/gnome-extensions-cli -- $SHELL -i`
 * @aliases `essembeh/gnome-extensions-cli`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.essembehgnomeextensionscli
 * // Or access via domain
 * const samePkg = pantry.githubcomessembehgnomeextensionscli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/essembeh/gnome-extensions-cli"
 * console.log(pkg.description) // "Command line tool to manage your Gnome Shell ex..."
 * console.log(pkg.programs)    // ["gnome-extensions-cli", "gext"]
 * console.log(pkg.versions[0]) // "0.10.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/essembeh/gnome-extensions-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const essembehgnomeextensionscliPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/essembeh/gnome-extensions-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/essembeh/gnome-extensions-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command line tool to manage your Gnome Shell extensions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/essembeh/gnome-extensions-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/essembeh/gnome-extensions-cli -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gnome-extensions-cli',
    'gext',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.5',
    '0.10.4',
    '0.10.3',
    '0.10.2',
    '0.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'essembeh/gnome-extensions-cli',
  ] as const,
  fullPath: 'github.com/essembeh/gnome-extensions-cli' as const,
}

export type EssembehgnomeextensionscliPackage = typeof essembehgnomeextensionscliPackage
