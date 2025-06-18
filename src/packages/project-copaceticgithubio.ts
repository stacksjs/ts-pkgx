/**
 * **project-copacetic.github.io** - Package from pantry: project-copacetic.github.io
 *
 * @domain `project-copacetic.github.io`
 *
 * @install `launchpad install project-copacetic.github.io`
 * @dependencies `go.dev^1.21`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projectcopaceticgithubio
 * console.log(pkg.name)        // "project-copacetic.github.io"
 * console.log(pkg.description) // "Package from pantry: project-copacetic.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/project-copacetic-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projectcopaceticgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'project-copacetic.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'project-copacetic.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: project-copacetic.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install project-copacetic.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/project-copacetic.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ProjectcopaceticgithubioPackage = typeof projectcopaceticgithubioPackage
