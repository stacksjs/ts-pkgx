/**
 * **nex** - Package from pantry: github.com/blynn/nex
 *
 * @domain `github.com/blynn/nex`
 *
 * @install `launchpad install github.com/blynn/nex`
 * @dependencies `rsync.samba.org`, `go.dev^1.20`, `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomblynnnex
 * console.log(pkg.name)        // "nex"
 * console.log(pkg.description) // "Package from pantry: github.com/blynn/nex"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/blynn/nex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomblynnnexPackage = {
  /**
   * The display name of this package.
   */
  name: 'nex' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/blynn/nex' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/blynn/nex' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/blynn/nex' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rsync.samba.org',
    'go.dev^1.20',
    'go.dev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blynn/nex/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomblynnnexPackage = typeof githubcomblynnnexPackage
