/**
 * **uriparse** -  :hocho: Strictly RFC 3986 compliant URI parsing and handling library written in C89; moved from SourceForge to GitHub
 *
 * @domain `uriparser.github.io`
 * @programs `uriparse`
 * @version `0.9.9` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install uriparser.github.io`
 * @homepage https://uriparser.github.io/
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.uriparsergithubio
 * console.log(pkg.name)        // "uriparse"
 * console.log(pkg.description) // " :hocho: Strictly RFC 3986 compliant URI parsin..."
 * console.log(pkg.programs)    // ["uriparse"]
 * console.log(pkg.versions[0]) // "0.9.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/uriparser-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const uriparsergithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'uriparse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'uriparser.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: ' :hocho: Strictly RFC 3986 compliant URI parsing and handling library written in C89; moved from SourceForge to GitHub' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/uriparser.github.io/package.yml' as const,
  homepageUrl: 'https://uriparser.github.io/' as const,
  githubUrl: 'https://github.com/uriparser/uriparser' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install uriparser.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +uriparser.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install uriparser.github.io' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'uriparse',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.9',
    '0.9.8',
    '0.9.7',
  ] as const,
  aliases: [] as const,
}

export type UriparsergithubioPackage = typeof uriparsergithubioPackage
