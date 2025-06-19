/**
 * **code** - Command-line interface built-in Visual Studio Code
 *
 * @domain `microsoft.com/code-cli`
 * @programs `code`
 * @version `1.101.0` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install code`
 * @aliases `code`, `vscode cli`
 * @dependencies `openssl.org@1.1`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.code
 * // Or access via domain
 * const samePkg = pantry.microsoftcomcodecli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "code-cli"
 * console.log(pkg.description) // "Command-line interface built-in Visual Studio Code"
 * console.log(pkg.programs)    // ["code"]
 * console.log(pkg.versions[0]) // "1.101.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/code-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codePackage = {
  /**
   * The display name of this package.
   */
  name: 'code-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/code-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line interface built-in Visual Studio Code' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/code-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install code' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'code',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.101.0',
    '1.100.3',
    '1.100.2',
    '1.100.1',
    '1.100.0',
    '1.99.3',
    '1.99.2',
    '1.99.1',
    '1.99.0',
    '1.98.2',
    '1.98.1',
    '1.98.0',
    '1.97.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'code',
    'vscode cli',
  ] as const,
}

export type CodePackage = typeof codePackage
