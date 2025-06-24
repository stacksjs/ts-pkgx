/**
 * **clog-tool.github.io** - Package from pantry: clog-tool.github.io
 *
 * @domain `clog-tool.github.io`
 *
 * @install `launchpad install clog-tool.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.clogtoolgithubio
 * console.log(pkg.name)        // "clog-tool.github.io"
 * console.log(pkg.description) // "Package from pantry: clog-tool.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/clog-tool-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const clogtoolgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'clog-tool.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'clog-tool.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: clog-tool.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install clog-tool.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +clog-tool.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install clog-tool.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/clog-tool.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ClogtoolgithubioPackage = typeof clogtoolgithubioPackage
