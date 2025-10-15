/**
 * **enc** - 🔑🔒 A modern and friendly CLI alternative to GnuPG: generate and download keys, encrypt, decrypt, and sign text and files, and more.
 *
 * @domain `github.com/life4/enc`
 * @programs `enc`
 * @version `1.1.4` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/life4/enc`
 * @dependencies `go.dev@^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlife4enc
 * console.log(pkg.name)        // "enc"
 * console.log(pkg.description) // "🔑🔒 A modern and friendly CLI alternative to G..."
 * console.log(pkg.programs)    // ["enc"]
 * console.log(pkg.versions[0]) // "1.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/life4/enc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlife4encPackage = {
  /**
   * The display name of this package.
   */
  name: 'enc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/life4/enc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🔑🔒 A modern and friendly CLI alternative to GnuPG: generate and download keys, encrypt, decrypt, and sign text and files, and more.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/life4/enc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/life4/enc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/life4/enc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/life4/enc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/life4/enc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'enc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev@^1.18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.4',
    '1.1.3',
    '1.1.2',
  ] as const,
  aliases: [] as const,
}

export type Githubcomlife4encPackage = typeof githubcomlife4encPackage
