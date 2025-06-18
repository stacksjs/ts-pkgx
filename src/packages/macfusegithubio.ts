/**
 * **macfuse.github.io** - Package from pantry: macfuse.github.io
 *
 * @domain `macfuse.github.io`
 *
 * @install `launchpad install macfuse.github.io`
 * @dependencies `mesonbuild.com`, `ninja-build.org`, `git-scm.org^2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.macfusegithubio
 * console.log(pkg.name)        // "macfuse.github.io"
 * console.log(pkg.description) // "Package from pantry: macfuse.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/macfuse-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const macfusegithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'macfuse.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'macfuse.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: macfuse.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install macfuse.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mesonbuild.com',
    'ninja-build.org',
    'git-scm.org^2',
    'llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/macfuse.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MacfusegithubioPackage = typeof macfusegithubioPackage
