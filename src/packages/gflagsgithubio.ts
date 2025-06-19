/**
 * **gflags.github.io** - The gflags package contains a C++ library that implements commandline flags processing. It includes built-in support for standard types such as string and the ability to define flags in the source file in which they are used. Online documentation available at:
 *
 * @domain `gflags.github.io`
 * @version `2.2.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gflags.github.io -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gflagsgithubio
 * console.log(pkg.name)        // "gflags.github.io"
 * console.log(pkg.description) // "The gflags package contains a C++ library that ..."
 * console.log(pkg.versions[0]) // "2.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gflags-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gflagsgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gflags.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gflags.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The gflags package contains a C++ library that implements commandline flags processing. It includes built-in support for standard types such as string and the ability to define flags in the source file in which they are used. Online documentation available at:' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gflags.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gflags.github.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.2',
  ] as const,
  aliases: [] as const,
}

export type GflagsgithubioPackage = typeof gflagsgithubioPackage
