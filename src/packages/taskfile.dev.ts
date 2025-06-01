/**
 * **task** - Crafters of fine Open Source products
 *
 * @domain `taskfile.dev`
 *
 * @install `pkgx taskfile.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.taskfiledev
 * console.log(pkg.name)        // "task"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taskfile-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taskfiledevPackage = {
  /**
   * The display name of this package.
   */
  name: 'task' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/taskfile.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taskfile.dev' as const,
  fullPath: 'taskfile.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx taskfile.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TaskfiledevPackage = typeof taskfiledevPackage
