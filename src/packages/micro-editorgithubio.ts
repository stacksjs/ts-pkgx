/**
 * **micro-editor.github.io** - Package from pantry: micro-editor.github.io
 *
 * @domain `micro-editor.github.io`
 *
 * @install `launchpad install micro-editor.github.io`
 * @dependencies `go.dev^1.16`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microeditorgithubio
 * console.log(pkg.name)        // "micro-editor.github.io"
 * console.log(pkg.description) // "Package from pantry: micro-editor.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/micro-editor-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microeditorgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'micro-editor.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'micro-editor.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: micro-editor.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install micro-editor.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.16',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/micro-editor.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicroeditorgithubioPackage = typeof microeditorgithubioPackage
