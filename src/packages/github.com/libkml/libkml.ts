/**
 * **libkml** - Package from pantry: github.com/libkml/libkml
 *
 * @domain `github.com/libkml/libkml`
 *
 * @install `launchpad install github.com/libkml/libkml`
 * @dependencies `zlib.net/minizip^1.3`, `uriparser.github.io^0.9`, `curl.se^8`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibkmllibkml
 * console.log(pkg.name)        // "libkml"
 * console.log(pkg.description) // "Package from pantry: github.com/libkml/libkml"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libkml/libkml.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlibkmllibkmlPackage = {
  /**
   * The display name of this package.
   */
  name: 'libkml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libkml/libkml' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/libkml/libkml' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/libkml/libkml' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/libkml/libkml -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/libkml/libkml' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net/minizip^1.3',
    'uriparser.github.io^0.9',
    'curl.se^8',
    'libexpat.github.io^2.5',
    'boost.org>=1.81',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libkml/libkml/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlibkmllibkmlPackage = typeof githubcomlibkmllibkmlPackage
