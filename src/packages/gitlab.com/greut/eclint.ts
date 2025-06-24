/**
 * **eclint** - Package from pantry: gitlab.com/greut/eclint
 *
 * @domain `gitlab.com/greut/eclint`
 *
 * @install `launchpad install gitlab.com/greut/eclint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlabcomgreuteclint
 * console.log(pkg.name)        // "eclint"
 * console.log(pkg.description) // "Package from pantry: gitlab.com/greut/eclint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/greut/eclint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomgreuteclintPackage = {
  /**
   * The display name of this package.
   */
  name: 'eclint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/greut/eclint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gitlab.com/greut/eclint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gitlab.com/greut/eclint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gitlab.com/greut/eclint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gitlab.com/greut/eclint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/greut/eclint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitlabcomgreuteclintPackage = typeof gitlabcomgreuteclintPackage
