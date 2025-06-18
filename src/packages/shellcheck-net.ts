/**
 * **shellcheck** - ShellCheck, a static analysis tool for shell scripts
 *
 * @domain `shellcheck.net`
 * @programs `shellcheck`
 * @version `0.10.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) shellcheck`
 * @name `shellcheck`
 * @dependencies `sourceware.org/libffi@3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.shellcheck
 * // Or access via domain
 * const samePkg = pantry.shellchecknet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shellcheck"
 * console.log(pkg.description) // "ShellCheck, a static analysis tool for shell sc..."
 * console.log(pkg.programs)    // ["shellcheck"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/shellcheck-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shellcheckPackage = {
  /**
   * The display name of this package.
   */
  name: 'shellcheck' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'shellcheck.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'ShellCheck, a static analysis tool for shell scripts' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/shellcheck.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) shellcheck' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'shellcheck',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/libffi@3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.0',
    '0.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'shellcheck.net' as const,
}

export type ShellcheckPackage = typeof shellcheckPackage
