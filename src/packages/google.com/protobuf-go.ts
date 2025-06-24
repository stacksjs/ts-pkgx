/**
 * **protobuf-go** - Package from pantry: google.com/protobuf-go
 *
 * @domain `google.com/protobuf-go`
 *
 * @install `launchpad install google.com/protobuf-go`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomprotobufgo
 * console.log(pkg.name)        // "protobuf-go"
 * console.log(pkg.description) // "Package from pantry: google.com/protobuf-go"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/protobuf-go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomprotobufgoPackage = {
  /**
   * The display name of this package.
   */
  name: 'protobuf-go' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/protobuf-go' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/protobuf-go' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/protobuf-go' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/protobuf-go -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/protobuf-go' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/protobuf-go/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomprotobufgoPackage = typeof googlecomprotobufgoPackage
