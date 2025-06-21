/**
 * **talisman** - Using a pre-commit hook, Talisman validates the outgoing changeset for things that look suspicious — such as tokens, passwords, and private keys.
 *
 * @domain `thoughtworks.github.io/talisman`
 * @programs `talisman`
 * @version `1.37.0` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install talisman`
 * @name `talisman`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.talisman
 * // Or access via domain
 * const samePkg = pantry.thoughtworksgithubiotalisman
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "talisman"
 * console.log(pkg.description) // "Using a pre-commit hook, Talisman validates the..."
 * console.log(pkg.programs)    // ["talisman"]
 * console.log(pkg.versions[0]) // "1.37.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thoughtworks-github-io/talisman.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const talismanPackage = {
  /**
   * The display name of this package.
   */
  name: 'talisman' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thoughtworks.github.io/talisman' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Using a pre-commit hook, Talisman validates the outgoing changeset for things that look suspicious — such as tokens, passwords, and private keys.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/thoughtworks.github.io/talisman/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install talisman' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'talisman',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.37.0',
    '1.36.1',
    '1.36.0',
    '1.35.1',
    '1.35.0',
    '1.34.0',
    '1.33.2',
    '1.33.1',
    '1.33.0',
    '1.32.2',
    '1.32.1',
    '1.32.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TalismanPackage = typeof talismanPackage
