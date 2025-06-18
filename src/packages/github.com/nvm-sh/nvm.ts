/**
 * **nvm-exec** - Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions
 *
 * @domain `github.com/nvm-sh/nvm`
 * @programs `nvm-exec`
 * @version `0.40.3` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nvm-exec`
 * @name `nvm-exec`
 * @aliases `nvm-sh/nvm`
 * @dependencies `linuxcurl.se`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nvmexec
 * // Or access via domain
 * const samePkg = pantry.githubcomnvmshnvm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nvm-exec"
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
  name: 'nvm-exec' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
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
   */
  dependencies: [
    'linuxcurl.se',
    'curl.se',
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
    'nvm-sh/nvm',
  ] as const,
  fullPath: 'github.com/nvm-sh/nvm' as const,
}

export type NvmexecPackage = typeof nvmexecPackage
