/**
 * **lego** - Let's Encrypt/ACME client and library written in Go
 *
 * @domain `github.com/go-acme/lego`
 * @programs `lego`
 * @version `4.23.1` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lego`
 * @name `lego`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lego
 * // Or access via domain
 * const samePkg = pantry.githubcomgoacmelego
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lego"
 * console.log(pkg.description) // "Let's Encrypt/ACME client and library written i..."
 * console.log(pkg.programs)    // ["lego"]
 * console.log(pkg.versions[0]) // "4.23.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/go-acme/lego.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const legoPackage = {
  /**
   * The display name of this package.
   */
  name: 'lego' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/go-acme/lego' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Let\'s Encrypt/ACME client and library written in Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/go-acme/lego/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lego' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lego',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.23.1',
    '4.23.0',
    '4.22.2',
    '4.22.1',
    '4.22.0',
    '4.21.0',
    '4.20.4',
    '4.20.3',
    '4.20.2',
    '4.19.2',
    '4.19.1',
    '4.19.0',
    '4.18.0',
    '4.17.4',
    '4.17.3',
    '4.16.1',
    '4.16.0',
    '4.15.0',
    '4.14.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LegoPackage = typeof legoPackage
