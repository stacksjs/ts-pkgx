/**
 * **git** - Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.
 *
 * @domain `git-scm.org`
 * @programs `git`, `git-cvsserver`, `git-receive-pack`, `git-shell`, `git-upload-archive`, ... (+3 more)
 * @version `2.50.0` (22 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +git-scm.org -- $SHELL -i`
 * @name `git`
 * @dependencies `zlib.net@1`, `gnu.org/gettext^0.21`, `curl.se>=5`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.git
 * // Or access via domain
 * const samePkg = pantry.gitscmorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git"
 * console.log(pkg.description) // "Git Source Code Mirror - This is a publish-only..."
 * console.log(pkg.programs)    // ["git", "git-cvsserver", ...]
 * console.log(pkg.versions[0]) // "2.50.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-scm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitPackage = {
  /**
   * The display name of this package.
   */
  name: 'git' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-scm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-scm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +git-scm.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git',
    'git-cvsserver',
    'git-receive-pack',
    'git-shell',
    'git-upload-archive',
    'git-upload-pack',
    'scalar',
    'git-credential-osxkeychain',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net@1',
    'gnu.org/gettext^0.21',
    'curl.se>=5',
    'curl.se/ca-certs',
    'perl.org',
    'libexpat.github.io~2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.50.0',
    '2.49.0',
    '2.48.0',
    '2.47.1',
    '2.47.0',
    '2.46.2',
    '2.46.1',
    '2.46.0',
    '2.45.2',
    '2.45.0',
    '2.44.0',
    '2.43.3',
    '2.43.2',
    '2.43.1',
    '2.43.0',
    '2.42.1',
    '2.42.0',
    '2.41.0',
    '2.40.0',
    '2.39.1',
    '2.39.0',
    '2.38.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'git' as const,
}

export type GitPackage = typeof gitPackage
