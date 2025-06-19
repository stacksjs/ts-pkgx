/**
 * **nvm-exec** - Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions
 *
 * @domain `github.com/nvm-sh/nvm`
 * @programs `nvm-exec`
 * @version `0.40.3` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nvm-exec`
 * @aliases `nvm-exec`
 * @dependencies `linux:curl.se` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nvmexec
 * // Or access via domain
 * const samePkg = pantry.githubcomnvmshnvm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nvm"
 * console.log(pkg.description) // "Node Version Manager - POSIX-compliant bash scr..."
 * console.log(pkg.programs)    // ["nvm-exec"]
 * console.log(pkg.versions[0]) // "0.40.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nvm-sh/nvm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nvmexecPackage = {
  /**
   * The display name of this package.
   */
  name: 'nvm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nvm-sh/nvm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nvm-sh/nvm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nvm-exec' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nvm-exec',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.40.3',
    '0.40.2',
    '0.40.1',
    '0.40.0',
    '0.39.7',
    '0.39.6',
    '0.39.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nvm-exec',
  ] as const,
}

export type NvmexecPackage = typeof nvmexecPackage
