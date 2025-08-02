/**
 * **protobuf-c** - Package from pantry: github.com/protobuf-c/protobuf-c
 *
 * @domain `github.com/protobuf-c/protobuf-c`
 *
 * @install `launchpad install github.com/protobuf-c/protobuf-c`
 * @dependencies `protobuf.dev^25.1`, `abseil.io^20250127`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomprotobufcprotobufc
 * console.log(pkg.name)        // "protobuf-c"
 * console.log(pkg.description) // "Package from pantry: github.com/protobuf-c/prot..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/protobuf-c/protobuf-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomprotobufcprotobufcPackage = {
  /**
   * The display name of this package.
   */
  name: 'protobuf-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/protobuf-c/protobuf-c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/protobuf-c/protobuf-c' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/protobuf-c/protobuf-c' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/protobuf-c/protobuf-c -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/protobuf-c/protobuf-c' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev^25.1',
    'abseil.io^20250127',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/protobuf-c/protobuf-c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomprotobufcprotobufcPackage = typeof githubcomprotobufcprotobufcPackage
