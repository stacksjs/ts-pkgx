/**
 * **cargo-c** - Package from pantry: github.com/lu-zero/cargo-c
 *
 * @domain `github.com/lu-zero/cargo-c`
 *
 * @install `launchpad install github.com/lu-zero/cargo-c`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`, `libssh2.org`, `openssl.org^1.1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomluzerocargoc
 * console.log(pkg.name)        // "cargo-c"
 * console.log(pkg.description) // "Package from pantry: github.com/lu-zero/cargo-c"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lu-zero/cargo-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomluzerocargocPackage = {
  /**
   * The display name of this package.
   */
  name: 'cargo-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lu-zero/cargo-c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/lu-zero/cargo-c' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/lu-zero/cargo-c' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/lu-zero/cargo-c -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/lu-zero/cargo-c' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
    'libssh2.org',
    'openssl.org^1.1',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lu-zero/cargo-c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomluzerocargocPackage = typeof githubcomluzerocargocPackage
