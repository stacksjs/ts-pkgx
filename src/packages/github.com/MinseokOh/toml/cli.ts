/**
 * **github.com/MinseokOh/toml-cli** - pkgx package
 *
 * @domain `github.com/MinseokOh/toml/cli`
 *
 * @install `pkgx github.com/MinseokOh/toml-cli`
 * @aliases `github.com/MinseokOh/toml-cli`, `MinseokOh/toml-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomMinseokOhtomlcli
 * // Or access via domain
 * const samePkg = pantry.githubcomminseokohtomlcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "MinseokOh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MinseokOh/toml/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomMinseokOhtomlcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'MinseokOh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MinseokOh/toml/cli' as const,
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
  installCommand: 'pkgx github.com/MinseokOh/toml-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/MinseokOh/toml-cli',
    'MinseokOh/toml-cli',
  ] as const,
  fullPath: 'github.com/MinseokOh/toml-cli' as const,
}

export type GithubcomMinseokOhtomlcliPackage = typeof githubcomMinseokOhtomlcliPackage
