/**
 * **XcodeGen** - Package from pantry: github.com/yonaskolb/XcodeGen
 *
 * @domain `github.com/yonaskolb/XcodeGen`
 *
 * @install `launchpad install github.com/yonaskolb/XcodeGen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomyonaskolbxcodegen
 * console.log(pkg.name)        // "XcodeGen"
 * console.log(pkg.description) // "Package from pantry: github.com/yonaskolb/XcodeGen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yonaskolb/XcodeGen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomyonaskolbxcodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'XcodeGen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/yonaskolb/XcodeGen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/yonaskolb/XcodeGen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/yonaskolb/XcodeGen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/yonaskolb/XcodeGen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/yonaskolb/XcodeGen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/yonaskolb/XcodeGen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomyonaskolbxcodegenPackage = typeof githubcomyonaskolbxcodegenPackage
