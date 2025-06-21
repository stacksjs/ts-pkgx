/**
 * **ttyd** - Package from pantry: tsl0922.github.io/ttyd
 *
 * @domain `tsl0922.github.io/ttyd`
 *
 * @install `launchpad install tsl0922.github.io/ttyd`
 * @dependencies `libuv.org@1`, `github.com/json-c/json-c^0.16`, `libwebsockets.org@4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tsl0922githubiottyd
 * console.log(pkg.name)        // "ttyd"
 * console.log(pkg.description) // "Package from pantry: tsl0922.github.io/ttyd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tsl0922-github-io/ttyd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tsl0922githubiottydPackage = {
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
  description: 'Package from pantry: tsl0922.github.io/ttyd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tsl0922.github.io/ttyd' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tsl0922.github.io/ttyd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Tsl0922githubiottydPackage = typeof tsl0922githubiottydPackage
