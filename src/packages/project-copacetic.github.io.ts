/**
 * **copa** - Crafters of fine Open Source products
 *
 * @domain `project-copacetic.github.io`
 *
 * @install `pkgx project-copacetic.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projectcopaceticgithubio
 * console.log(pkg.name)        // "copa"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/project-copacetic-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projectcopaceticgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'copa' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/project-copacetic.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'project-copacetic.github.io' as const,
  fullPath: 'project-copacetic.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx project-copacetic.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ProjectcopaceticgithubioPackage = typeof projectcopaceticgithubioPackage
