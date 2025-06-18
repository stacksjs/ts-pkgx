/**
 * **github.com/mattrobenolt/jinja2-cli** - pkgx package
 *
 * @domain `github.com/mattrobenolt/jinja2/cli`
 *
 * @install `pkgx github.com/mattrobenolt/jinja2-cli`
 * @aliases `github.com/mattrobenolt/jinja2-cli`, `mattrobenolt/jinja2-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommattrobenoltjinja2cli
 * // Or access via domain
 * const samePkg = pantry.githubcommattrobenoltjinja2cli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mattrobenolt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mattrobenolt/jinja2/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommattrobenoltjinja2cliPackage = {
  /**
   * The display name of this package.
   */
  name: 'mattrobenolt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mattrobenolt/jinja2/cli' as const,
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
  installCommand: 'pkgx github.com/mattrobenolt/jinja2-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mattrobenolt/jinja2-cli',
    'mattrobenolt/jinja2-cli',
  ] as const,
  fullPath: 'github.com/mattrobenolt/jinja2-cli' as const,
}

export type Githubcommattrobenoltjinja2cliPackage = typeof githubcommattrobenoltjinja2cliPackage
