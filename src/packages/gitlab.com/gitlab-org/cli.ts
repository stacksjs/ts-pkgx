/**
 * **glab** - Open-source GitLab command-line tool
 *
 * @domain `gitlab.com/gitlab-org/cli`
 * @programs `glab`
 * @version `1.66.0` (51 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install glab`
 * @name `glab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.glab
 * // Or access via domain
 * const samePkg = pantry.gitlabcomgitlaborgcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "glab"
 * console.log(pkg.description) // "Open-source GitLab command-line tool"
 * console.log(pkg.programs)    // ["glab"]
 * console.log(pkg.versions[0]) // "1.66.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/gitlab-org/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glabPackage = {
  /**
   * The display name of this package.
   */
  name: 'glab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/gitlab-org/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open-source GitLab command-line tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/gitlab-org/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install glab' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'glab',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.66.0',
    '1.65.0',
    '1.64.0',
    '1.63.0',
    '1.62.0',
    '1.61.0',
    '1.60.2',
    '1.60.1',
    '1.60.0',
    '1.59.2',
    '1.59.1',
    '1.59.0',
    '1.58.0',
    '1.57.0',
    '1.56.0',
    '1.55.0',
    '1.54.0',
    '1.53.0',
    '1.52.0',
    '1.51.0',
    '1.50.0',
    '1.49.0',
    '1.48.0',
    '1.47.0',
    '1.46.1',
    '1.46.0',
    '1.45.0',
    '1.44.1',
    '1.44.0',
    '1.43.0',
    '1.42.0',
    '1.41.0',
    '1.40.0',
    '1.39.0',
    '1.38.0',
    '1.37.0',
    '1.36.0',
    '1.35.0',
    '1.34.0',
    '1.33.0',
    '1.32.0',
    '1.31.0',
    '1.30.0',
    '1.29.4',
    '1.29.3',
    '1.29.2',
    '1.29.1',
    '1.29.0',
    '1.26.0',
    '1.25.2',
    '1.25.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) glab -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install glab' as const,
}

export type GlabPackage = typeof glabPackage
