/**
 * **dotenv-linter** - ⚡️Lightning-fast linter for .env files. Written in Rust 🦀
 *
 * @domain `dotenv-linter.github.io`
 * @programs `dotenv-linter`
 * @version `3.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dotenv-linter`
 * @name `dotenv-linter`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dotenvlinter
 * // Or access via domain
 * const samePkg = pantry.dotenvlintergithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dotenv-linter"
 * console.log(pkg.description) // "⚡️Lightning-fast linter for .env files. Written..."
 * console.log(pkg.programs)    // ["dotenv-linter"]
 * console.log(pkg.versions[0]) // "3.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dotenv-linter-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dotenvlinterPackage = {
  /**
   * The display name of this package.
   */
  name: 'dotenv-linter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dotenv-linter.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '⚡️Lightning-fast linter for .env files. Written in Rust 🦀' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dotenv-linter.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dotenv-linter' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dotenv-linter',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) dotenv-linter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dotenv-linter' as const,
}

export type DotenvlinterPackage = typeof dotenvlinterPackage
