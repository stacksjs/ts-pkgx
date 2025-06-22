/**
 * **task** - A task runner / simpler Make alternative written in Go
 *
 * @domain `taskfile.dev`
 * @programs `task`
 * @version `3.44.0` (31 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install task`
 * @name `task`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.task
 * // Or access via domain
 * const samePkg = pantry.taskfiledev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "task"
 * console.log(pkg.description) // "A task runner / simpler Make alternative writte..."
 * console.log(pkg.programs)    // ["task"]
 * console.log(pkg.versions[0]) // "3.44.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taskfile-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taskPackage = {
  /**
   * The display name of this package.
   */
  name: 'task' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taskfile.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A task runner / simpler Make alternative written in Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taskfile.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install task' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'task',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.44.0',
    '3.43.3',
    '3.43.2',
    '3.43.1',
    '3.42.1',
    '3.42.0',
    '3.41.0',
    '3.40.1',
    '3.40.0',
    '3.39.2',
    '3.39.1',
    '3.39.0',
    '3.38.0',
    '3.37.2',
    '3.37.1',
    '3.37.0',
    '3.36.0',
    '3.35.1',
    '3.35.0',
    '3.34.1',
    '3.34.0',
    '3.33.1',
    '3.33.0',
    '3.32.0',
    '3.31.0',
    '3.30.1',
    '3.30.0',
    '3.29.1',
    '3.28.0',
    '3.27.1',
    '3.27.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) task -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install task' as const,
}

export type TaskPackage = typeof taskPackage
