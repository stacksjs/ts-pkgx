/**
 * **ttyd** - Command-line tool for sharing terminal over the web
 *
 * @domain `tsl0922.github.io/ttyd`
 * @programs `ttyd`
 * @version `1.7.7` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ttyd`
 * @name `ttyd`
 * @dependencies `libuv.org@1`, `github.com/json-c/json-c^0.16`, `libwebsockets.org@4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ttyd
 * // Or access via domain
 * const samePkg = pantry.tsl0922githubiottyd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ttyd"
 * console.log(pkg.description) // "Command-line tool for sharing terminal over the..."
 * console.log(pkg.programs)    // ["ttyd"]
 * console.log(pkg.versions[0]) // "1.7.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tsl0922-github-io/ttyd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ttydPackage = {
  /**
   * The display name of this package.
   */
  name: 'ttyd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tsl0922.github.io/ttyd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line tool for sharing terminal over the web' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tsl0922.github.io/ttyd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ttyd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ttyd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libuv.org@1',
    'github.com/json-c/json-c^0.16',
    'libwebsockets.org@4',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.7',
    '1.7.6',
    '1.7.5',
    '1.7.4',
    '1.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ttyd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ttyd' as const,
}

export type TtydPackage = typeof ttydPackage
