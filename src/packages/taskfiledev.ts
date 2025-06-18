/**
 * **taskfile.dev** - Package from pantry: taskfile.dev
 *
 * @domain `taskfile.dev`
 *
 * @install `launchpad install taskfile.dev`
 * @dependencies `go.dev~1.23`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.taskfiledev
 * console.log(pkg.name)        // "taskfile.dev"
 * console.log(pkg.description) // "Package from pantry: taskfile.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taskfile-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taskfiledevPackage = {
  /**
   * The display name of this package.
   */
  name: 'taskfile.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taskfile.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: taskfile.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install taskfile.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.23',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taskfile.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TaskfiledevPackage = typeof taskfiledevPackage
